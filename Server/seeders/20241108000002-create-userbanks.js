module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('user_banks', [
            {
                userId: 1,
                bankId: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 1,
                bankId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 2,
                bankId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('user_banks', null, {});
    }
};
