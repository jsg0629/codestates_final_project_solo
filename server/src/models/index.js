import Sequelize from 'sequelize'
import configuration from '../config/config'

import user from './user'
import artwork from './artwork'
import artworkHashtag from './artwork_hashtag'
import comment from './comment'
import hashtag from './hashtag'
import like from './like'
import profile from './profile'

const env = process.env.NODE_ENV || 'development'
const config = configuration[env]
const db = {}

const sequelize = new Sequelize(config.database, config.username, config.password, config)

db.sequelize = sequelize
db.Sequelize = Sequelize

db.User = user(sequelize, Sequelize)
db.Artwork = artwork(sequelize, Sequelize)
db.ArtworkHashtag = artworkHashtag(sequelize, Sequelize)
db.Comment = comment(sequelize, Sequelize)
db.Hashtag = hashtag(sequelize, Sequelize)
db.Like = like(sequelize, Sequelize)
db.Profile = profile(sequelize, Sequelize)

// artwork owner_id 외래키 설정
db.User.hasMany(db.Artwork, { foreignKey: 'owner_id', allowNull: false })
db.Artwork.belongsTo(db.User, { foreignKey: 'owner_id' })

// artwrok_hahstag hashtag_id 외래키 설정
db.Hashtag.hasMany(db.ArtworkHashtag, { foreignKey: 'hashtag_id', allowNull: false })
db.ArtworkHashtag.belongsTo(db.Hashtag, { foreignKey: 'hashtag_id' })

// artwork_hashtag artwork_id 외래키 설정
db.Artwork.hasMany(db.ArtworkHashtag, { foreignKey: 'artwork_id', allowNull: false })
db.ArtworkHashtag.belongsTo(db.Artwork, { foreignKey: 'artwork_id' })

// artwrok_hahstag hashtag_id 외래키 설정
db.Hashtag.hasMany(db.ArtworkHashtag, { foreignKey: 'hashtag_id', allowNull: false })
db.ArtworkHashtag.belongsTo(db.Hashtag, { foreignKey: 'hashtag_id' })

// profile user_id 외래키 설정
db.User.hasOne(db.Profile, { foreignKey: 'user_id' })
db.Profile.belongsTo(db.User, { foreignKey: 'user_id' })

// comment user_id 외래키 설정
db.User.hasMany(db.Comment, { foreignKey: 'user_id', allowNull: false })
db.Comment.belongsTo(db.User, { foreignKey: 'user_id' })

// comment artwork_id 외래키 설정
db.Artwork.hasMany(db.Comment, { foreignKey: 'artwork_id', allowNull: false })
db.Comment.belongsTo(db.Artwork, { foreignKey: 'artwork_id' })

// like user_id 외래키 설정
db.User.hasMany(db.Like, { foreignKey: 'user_id', allowNull: false })
db.Like.belongsTo(db.User, { foreignKey: 'user_id' })

// like artwork_id 외래키 설정
db.Artwork.hasMany(db.Like, { foreignKey: 'artwork_id', allowNull: false })
db.Like.belongsTo(db.Artwork, { foreignKey: 'artwork_id' })

export default db
