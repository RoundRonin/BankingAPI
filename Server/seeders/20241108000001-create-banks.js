module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('banks', [
            {
                name: 'Bank of America',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Wells Fargo',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('banks', null, {});
    }
};
