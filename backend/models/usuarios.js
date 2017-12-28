'use strict';

const Sequelize = require('sequelize');

module.exports = function (sequelize) {
  // Define a Sequelize model
  const Usuario = sequelize.define('usuarios', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER
    },
    nombre: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING
    }
  });

  return Usuario;
};
