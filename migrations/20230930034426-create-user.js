'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const schemaList = await queryInterface.showAllSchemas()
    schemaList.forEach(async (schema) => {
      await queryInterface.createTable('Users', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        firstName: {
          type: Sequelize.STRING
        },
        lastName: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }, { schema: schema });
    })
  },
  async down(queryInterface, Sequelize) {
    const schemaList = await queryInterface.showAllSchemas()
    schemaList.forEach(async (schema) => {
      await queryInterface.dropTable({ tableName: 'Users', schema: schema });
    })
    // await queryInterface.dropTable('nhatxz.Users', { schema: "nhatxz" });
  }
};