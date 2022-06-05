# 실행 방법
시간이 모자라서 배포를 하지 못했습니다.. clone 받으셔서 앱 구동 해 주세요 
1. root폴더(client) `yarn install`  라이브러리 다운로드  
2. server 폴더에서 `yarn install`  라이브러리 다운로드
3. server 폴더에 .env 파일을 .env example에 맞춰서 작성해주세요. ( MYSQL_PORT만 3306으로 )
4. mysql CLI를 통해 MYSQL_NAME의 값으로 넣어준 데이터베이스를 생성해줍니다
5.  server 폴더에서 `npm run start`  schema 를 생성 해 줍니다
6.  server 구동을 꺼주시고, `npx sequelize-cli db:seed:all` 을 통해서 seeders폴데에 세팅된 더미데이터를 생성 해 줍니다
7. server 실행 server 폴더에서 `yarn start` 
8. client 실행 root 폴더에서 `yarn start`

# Art1st Notion
관련된 추가적인 정보는 노션에 작성하였으니 아래 링크로 이동 해 주세요 <br>
[Art1st Notion](https://fluoridated-cayenne-db1.notion.site/Wanted_final_project_-3770a1b65d3244f18f7b3b56579ac2c5)
