module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'test1',
        user_id: 'test1',
        password: '@!DKJ@#!JK!@KJ132',
        balance: '0',

        total_sales: 117,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'test2',
        user_id: 'test2',
        password: '@!DKJ@#!JK!@KJ132',
        balance: '0',

        total_sales: 42,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        name: 'test3',
        user_id: 'test3',
        password: '@!DKJ@#!JK!@KJ132',
        balance: '0',

        total_sales: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'test4',
        user_id: 'test4',
        password: '@!DKJ@#!JK!@KJ132',
        balance: '0',

        total_sales: 233,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'test5',
        user_id: 'test5',
        password: '@!DKJ@#!JK!@KJ132',
        balance: '0',

        total_sales: 310,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'test6',
        user_id: 'test6',
        password: '@!DKJ@#!JK!@KJ132',
        balance: '0',

        total_sales: 78,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'test7',
        user_id: 'test7',
        password: '@!DKJ@#!JK!@KJ132',
        balance: '0',

        total_sales: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'test8',
        user_id: 'test8',
        password: '@!DKJ@#!JK!@KJ132',
        balance: '0',

        total_sales: 1110,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'test9',
        user_id: 'test9',
        password: '@!DKJ@#!JK!@KJ132',
        balance: '0',

        total_sales: 411,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'test10',
        user_id: 'test10',
        password: '@!DKJ@#!JK!@KJ132',
        balance: '0',

        total_sales: 775,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'test11',
        user_id: 'test11',
        password: '@!DKJ@#!JK!@KJ132',
        balance: '0',

        total_sales: 855,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'test12',
        user_id: 'test12',
        password: '@!DKJ@#!JK!@KJ132',
        balance: '0',

        total_sales: 127,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'test13',
        user_id: 'test13',
        password: '@!DKJ@#!JK!@KJ132',
        balance: '0',

        total_sales: 88,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'test14',
        user_id: 'test14',
        password: '@!DKJ@#!JK!@KJ132',
        balance: '0',

        total_sales: 72,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'test15',
        user_id: 'test15',
        password: '@!DKJ@#!JK!@KJ132',
        balance: '0',

        total_sales: 36,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'test16',
        user_id: 'test16',
        password: '@!DKJ@#!JK!@KJ132',
        balance: '0',

        total_sales: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'test17',
        user_id: 'test17',
        password: '@!DKJ@#!JK!@KJ132',
        balance: '0',

        total_sales: 48,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'test18',
        user_id: 'test18',
        password: '@!DKJ@#!JK!@KJ132',
        balance: '0',

        total_sales: 73,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'test19',
        user_id: 'test19',
        password: '@!DKJ@#!JK!@KJ132',
        balance: '0',

        total_sales: 66,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'test20',
        user_id: 'test20',
        password: '@!DKJ@#!JK!@KJ132',
        balance: '0',

        total_sales: 158,
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
    await queryInterface.bulkDelete('artworks', null, {})
  },
}
