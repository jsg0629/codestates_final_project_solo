# 실행 방법
1. root폴더(client) `yarn install`  라이브러리 다운로드  
2. server 폴더에서 `yarn install`  라이브러리 다운로드
3. server 폴더에 .env 파일을 .env example에 맞춰서 작성해주세요. ( MYSQL_PORT만 3306으로 )
4. mysql CLI를 통해 MYSQL_NAME의 값으로 넣어준 데이터베이스를 생성해줍니다
    1. `mysql -u root -p`  mysql CLI에 접속하는 명령어 입니다.
    2. 비밀번호 입력
    3. `create database MYSQL_NAME;` Database 를 생성하는 쿼리문 입니다.
5.  server 폴더에서 `npm run start`  schema 를 생성 해 줍니다
6.  server 구동을 꺼주시고, `npx sequelize-cli db:seed:all` 을 통해서 seeders폴데에 세팅된 더미데이터를 생성 해 줍니다. 
8. server 실행 server 폴더에서 `yarn start` 
9. client 실행 root 폴더에서 `yarn start`

# Art1st Notion
관련된 추가적인 정보는 노션에 작성하였으니 아래 링크로 이동 해 주세요 <br>
[Art1st Notion](https://fluoridated-cayenne-db1.notion.site/Wanted_final_project_-3770a1b65d3244f18f7b3b56579ac2c5)
