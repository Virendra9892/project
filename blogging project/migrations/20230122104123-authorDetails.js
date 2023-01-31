'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('author',"age", {
      type:Sequelize.INTEGER,
    }),
    await queryInterface.addColumn('author',"salary", {
      type:Sequelize.INTEGER,
    }),
    await queryInterface.addColumn('author',"technology", {
      type:Sequelize.STRING,
    });




    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
