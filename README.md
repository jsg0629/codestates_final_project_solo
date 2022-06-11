# 실행 방법
1. root폴더(client) `yarn install`  라이브러리 다운로드  
2. server 폴더에서 `yarn install`  라이브러리 다운로드
3. server 폴더에 .env 파일을 .env example에 맞춰서 작성해주세요.  MYSQL_PORT만 3306으로. 아래는 .env 파일 예시입니다
    
    ```jsx
    # DB
    MYSQL_HOST =localhost
    MYSQL_USER =root
    MYSQL_PW = 1111
    MYSQL_NAME = example1
    MYSQL_PORT =3306
    ```
4. mysql CLI를 통해 MYSQL_NAME의 값으로 넣어준 데이터베이스를 생성해줍니다
    1. `mysql -u root -p`  mysql CLI에 접속하는 명령어 입니다.
    2. 비밀번호 입력
    3. `create database MYSQL_NAME;` Database 를 생성하는 쿼리문 입니다.
5.  server 폴더에서 `yarn start`  schema 를 생성 해 줍니다
6.  server 구동을 꺼주시고, `npx sequelize-cli db:seed:all` 을 통해서 seeders폴데에 세팅된 더미데이터를 생성 해 줍니다. 
7. server 실행 server 폴더에서 `yarn start` 
8. client 실행 root 폴더에서 `yarn start`

# Art1st Notion
관련된 추가적인 정보는 노션에 작성하였으니 아래 링크로 이동 해 주세요 <br>
[Art1st Notion](https://fluoridated-cayenne-db1.notion.site/Wanted_final_project_-3770a1b65d3244f18f7b3b56579ac2c5)

## Intro

- 프로젝트 기간 : 🗓️ 06.02 ~ 06.05
- 프로젝트 명: Art1st
- Github: [🎨 Art1st Github](https://github.com/jsg0629/wanted_final_project)
- Notion: 🔐 [Art1st Notion](https://fluoridated-cayenne-db1.notion.site/Wanted_final_project_-3770a1b65d3244f18f7b3b56579ac2c5)
- API : [📙 Art1st API](https://fluoridated-cayenne-db1.notion.site/API-134b5d3a873440498bfcc7bcfd87e78a)

## 사용 기술

> version<br/>
Nodejs : 14.18.1<br/>
React : v17
> 

frontend :  `typescript`, `MUI`, `recoil`, `react-query` , `react-icons`, `dayjs` , `classnames` , `axios` , `react-router-dom` , `react-slick` , `slick-carousel`

backend : `nodejs`, `express`, `mysql`, `sequelize`

### [DB 스키마](https://dbdiagram.io/d/622d61ff61d06e6eadefa0f9)

![스크린샷, 2022-06-05 18-11-16](https://user-images.githubusercontent.com/93072844/172047018-77f13a53-c66f-470b-827d-78cc0947fdc0.png)

## 동작 화면

### Nav
![Peek 2022-06-05 20-15](https://user-images.githubusercontent.com/93072844/172047943-029b74b8-e7b3-4ab3-a012-2b73ef53ce0c.gif)

- Art1st 이미지를 클릭하면 Main page로 routing 됩니다.
- Discover 을 클릭하면 Discover page로 routing 됩니다.
- position 속성 fixed 속성값을 주어서 스크롤을 내려고 상단에 Nav바가 고정되도록 하였습니다.
- z-index: 1, backdrop-filter 속성 blur 속성값을 주어서 투명도를 구현했습니다
![Peek 2022-06-05 20-15](https://user-images.githubusercontent.com/93072844/172047957-0094ccc0-fb12-4725-b4f7-00a7d0c67e6d.gif)


### Main Page

![Peek 2022-06-05 20-17](https://user-images.githubusercontent.com/93072844/172048001-23d64e43-4632-429e-ba80-b8f47a595bcc.gif)

- server 에서 artworks 테이블에서 views 레코드 값이 가장 높은 작품을 가져와 배너 이미지로 사용합니다.
- 배너 작품을 클릭하면 해당 작품 ArtDetail page로 routing 됩니다.
- 배너 Title은 webkit-text-fill-color 속성과 css3 animation을 이용하여 무한하게 변하는 gradient 색상을 구현 하였습니다.

### Discover Page

- **Top Artist**
 ![topartist](https://user-images.githubusercontent.com/93072844/172047608-5695ae99-bc4d-4541-97ca-95974845f607.gif)

    - Top Artist는 total_sales 기준이며, server 에서 users 테이블 total_sales 레코드 기준으로 정렬하여 상위 16개의 유저 데이터를 가져옵니다.
    - **`react-slick`** 을 이용하여  Top Artist 를 slider로 볼 수 있게 구현 하였습니다.
    - before 버튼을 눌르거나 next 버튼을 눌르면 현재 상태를 state에 boolean으로 저장하여 button이 disabled 되도록 구현 하였습니다.
    - artist의 이름을 클릭하면 해당 user의 페이지로 routing 됩니다.
- **Discover**
![Peek 2022-06-05 20-21](https://user-images.githubusercontent.com/93072844/172048137-7bdd8e32-8a12-4117-a00a-b5ea85677177.gif)

    - 태그 리스트는 server 에서 hashtags 테이블 count 레코드 기준 정렬하여, 상위 10개의 태그 데이터를 가져옵니다.
    - 선택된 태그의 색상을 변경하기위해 별도로 현재 선택된 태그id를 useState를 이용하 clickedTagId 에 저장합니다. 사용자가 태그를 클릭하면 clickedTagId 가 없데이트 되고, clickedTagId 와 태그컴포넌트가 전달받은 tag id와 같으면 버튼의 생상을 변경합니다.
    - 태그를 클릭하면 해당 태크에 속한 작품 리스트가 새롭게 요청되며, 해당 페이지가 다시 마운트 됩니다.
    - 작품 리스트는 tagId state값에 따라 server에 요청되어 데이터를 응답받는데, 현재 선택된 tag는 useState를 이용하여 state로 관리되고 있습니다. 처음 Discover페이지가 마운트 됐을때는 tagId가 undefined 이고, getArtworkList 함수에 인자로서 tagId를 받는데 tagId가 undefined 일때는 서버에서 전체 작품을 return 합니다. 사용자가 태그를 선택하면 tagId state가 변경되고, useQuery가 실행되면서 해당 tag에 만족하는 작품리스트를 요청하게 됩니다.
    - 작품을 hover하면 작품에 관련된 부가적인 정보를 띄웁니다.
    - 작품을 클릭하면 해당 작품의 ArtDetail Page로 routing 됩니다.

### ArtDetail Page


- useParams 를 이용하여 현재의 param을 저장, param은 artwork의 id와 매칭됩니다. ArtDetail Page 마운트 될때 해당 param에 맞는 artwork 정보을 server에 요청합니다.
![Peek 2022-06-05 20-24](https://user-images.githubusercontent.com/93072844/172048220-c21ec0db-6756-4722-b0f1-dfb8df040005.gif)
- owner name 을 클릭하면 해당 유저의 User Page로 routing 됩니다.
![Peek 2022-06-05 20-25](https://user-images.githubusercontent.com/93072844/172048222-c608327e-fdd7-4cdc-9ef2-40ef50483ab7.gif)
- comment 입력 창 textarea는 useRef 를 이용하여 자동으로 height가 조절되게 구현 하였습니다.
![Peek 2022-06-05 20-28](https://user-images.githubusercontent.com/93072844/172048363-34ab9dfc-9345-4d91-b6d9-5438c69586f8.gif)


### User Page
![user](https://user-images.githubusercontent.com/93072844/172047597-4aac8e3d-b6ab-4941-8fec-f8767879c8ee.gif)


- useParams 를 이용하여 현재의 param을 저장, param은 user의 id와 매칭됩니다. user Page 마운트 될때 해당 param에 맞는 user 정보을 server에 요청합니다.

### Footer

- 깃헙 아이콘을 클릭하면 Art1st 깃헙 레파지토리로~
- 노션 아이콘을 클릭하면 Art1st Notion 으로~

