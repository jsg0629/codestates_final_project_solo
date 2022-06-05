module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('artworks', [
      {
        views: 11,
        price: 0,
        imgURI:
          'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        title: '테스트작품1',
        desc: '테스트1 작품입니다',
        owner_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        views: 141,
        price: 38,
        imgURI:
          'https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=536&q=80',
        title: '테스트작품2',
        desc: '테스트2 작품입니다',
        owner_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        views: 72,
        price: 0,
        imgURI:
          'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        title: '테스트작품3',
        desc: '테스트3 작품입니다',
        owner_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        views: 85,
        price: 47,
        imgURI:
          'https://images.unsplash.com/photo-1593073862407-a3ce22748763?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
        title: '테스트작품4',
        desc: '테스트4 작품입니다',
        owner_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        views: 112,
        price: 0,
        imgURI:
          'https://images.unsplash.com/photo-1637416067365-2b5e7e8fe8fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        title: '테스트작품5',
        desc: '테스트5 작품입니다',
        owner_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        views: 355,
        price: 85,
        imgURI:
          'https://images.unsplash.com/photo-1634320714682-ae8b9c9cee60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        title: '테스트작품6',
        desc: '테스트6 작품입니다',
        owner_id: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        views: 218,
        price: 0,
        imgURI:
          'https://images.unsplash.com/photo-1635399860495-2a2802a6df5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        title: '테스트작품7',
        desc: '테스트7 작품입니다',
        owner_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        views: 215,
        price: 82,
        imgURI:
          'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80',
        title: '테스트작품8',
        desc: '테스트8 작품입니다',
        owner_id: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        views: 177,
        price: 0,
        imgURI:
          'https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        title: '테스트작품9',
        desc: '테스트9 작품입니다',
        owner_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        views: 58,
        price: 99,
        imgURI:
          'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80',
        title: '테스트작품10',
        desc: '테스트10 작품입니다',
        owner_id: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        views: 77,
        price: 0,
        imgURI:
          'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
        title: '테스트작품11',
        desc: '테스트11 작품입니다',
        owner_id: 11,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        views: 110,
        price: 1000,
        imgURI:
          'https://images.unsplash.com/photo-1637666505754-7416ebd70cbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        title: '테스트작품12',
        desc: '테스트12 작품입니다',
        owner_id: 12,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        views: 212,
        price: 0,
        imgURI:
          'https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80',
        title: '테스트작품13',
        desc: '테스트13 작품입니다',
        owner_id: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        views: 212,
        price: 44,
        imgURI:
          'https://images.unsplash.com/photo-1635243824676-e2f0f45a88e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRpZ2l0YWwlMjBhcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
        title: '테스트작품14',
        desc: '테스트14 작품입니다',
        owner_id: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        views: 116,
        price: 0,
        imgURI:
          'https://images.unsplash.com/photo-1547333590-47fae5f58d21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        title: '테스트작품15',
        desc: '테스트15 작품입니다',
        owner_id: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        views: 41,
        price: 58,
        imgURI:
          'https://images.unsplash.com/photo-1551732998-9573f695fdbb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
        title: '테스트작품16',
        desc: '테스트16 작품입니다',
        owner_id: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        views: 22,
        price: 0,
        imgURI:
          'https://images.unsplash.com/photo-1633743252577-ccb68cbdb6ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
        title: '테스트작품17',
        desc: '테스트17 작품입니다',
        owner_id: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        views: 1100,
        price: 0,
        imgURI:
          'https://images.unsplash.com/photo-1636889647964-c759d54751ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
        title: '테스트작품18',
        desc: '테스트18 작품입니다',
        owner_id: 17,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        views: 141,
        price: 0,
        imgURI:
          'https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80',
        title: '테스트작품19',
        desc: '테스트19 작품입니다',
        owner_id: 18,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        views: 51,
        price: 0,
        imgURI:
          'https://images.unsplash.com/photo-1635396259299-2eb9a880075a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
        title: '테스트작품20',
        desc: '테스트20 작품입니다',
        owner_id: 19,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        views: 42,
        price: 0,
        imgURI:
          'https://images.unsplash.com/photo-1625014618427-fbc980b974f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80',
        title: '테스트작품21',
        desc: '테스트21 작품입니다',
        owner_id: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}
