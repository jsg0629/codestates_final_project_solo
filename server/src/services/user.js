/* eslint-disable no-await-in-loop */
/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
import db from '../models/index'

class UserService {
  constructor() {
    this.User = db.User
    this.Profile = db.Profile
    this.Website = db.Website
  }

  // 유저 회원가입
  async signUp(user_id, user_pw) {
    try {
      await db.User.findOrCreate({
        // 조회에서 없으면 create 해주는 함수이다
        where: {
          user_id,
        },
        default: {
          password: user_pw,
        },
      })
        .then(([userInfo, created]) => {
          if (!created) {
            // 있으면 있다고 응답
            throw Error('User exists')
            // 없으면 DB에 저장
          } else {
            db.User.update(
              {
                name: user_id,
                password: user_pw,
                balance: '0',
                total_sales: '0',
              },
              {
                where: {
                  user_id,
                },
              }
            ).catch((err) => {
              console.error(err)
            })

            db.Profile.create({
              picture: 'https://i.pinimg.com/564x/18/b9/ff/18b9ffb2a8a791d50213a9d595c4dd52.jpg',
              description: '',
              instargram: '',
              tweeter: '',
              facebook: '',
              user_id: userInfo.id,
            })
          }
        })
        .then(() => {
          return 'sign up success'
        })
    } catch (err) {
      throw Error(err.toString())
    }
  }

  // 유저 로그아웃 세션 삭제
  async logout(session) {
    try {
      if (session.user_id) {
        session.destroy()
        return true
      }
      throw Error('bad requset')
    } catch (err) {
      throw Error(err.toString())
    }
  }

  // 유저 로그인
  async login(user_id, user_pw, req) {
    try {
      const userInfo = await db.User.findOne({
        // DB 아이디 비번일치확인
        where: { user_id, password: user_pw },
      }).catch((err) => {
        console.error(err)
      })

      if (!userInfo) {
        throw Error('not authorized')
      } else {
        // 있으면 세션ID 생성
        req.session.user_id = req.body.user_id
        req.session.save(() => {
          console.log(req.session)
        })
      }
    } catch (err) {
      throw Error(err.toString())
    }
  }

  // 내 정보 불러오기
  async getMyUserInfo(user_id) {
    try {
      const user = await this.User.findOne({
        attributes: ['id', 'name', 'user_id', 'balance', 'total_sales'],
        where: { user_id },
      })

      if (user === null) {
        throw Error('Not Found User')
      }

      const user_profile = await this.Profile.findOne({
        attributes: ['id', 'picture', 'description', 'instargram', 'tweeter', 'facebook'],
        where: { user_id: user.id },
      })

      return {
        user,
        user_profile,
      }
    } catch (err) {
      throw Error(err.toString())
    }
  }

  // Artworks Page Top Creator 16명 Users 정보 가져오기
  async getTopUsers() {
    try {
      const topUsers = []
      const users = await db.User.findAll({
        // 판매량순으로 유저 정렬
        order: [[db.Sequelize.cast(db.Sequelize.col('total_sales'), 'FLOAT'), 'DESC']],
        limit: 16,
        where: {
          [db.Sequelize.Op.not]: [{ name: 'server' }],
        },
      })

      for (let i = 0; i < users.length; i += 1) {
        const profile = await db.Profile.findOne({
          // 판매량순으로 정렬된 유저데이터로 프로필 테이블 조회
          where: { user_id: users[i].id },
        })

        if (profile === null) {
          break
        }
        topUsers[i] = {
          id: users[i].id,
          name: users[i].name,
          ProfileImg: profile.picture,
        }
      }

      return topUsers
    } catch (err) {
      throw Error(err.toString())
    }
  }
}

export default UserService
