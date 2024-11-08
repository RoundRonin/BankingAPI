module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('users', [
            {
                name: 'John Doe',
                email: 'john@example.com',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Jane Smith',
                email: 'jane@example.com',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    }, down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('users', null, {});
    }
};
