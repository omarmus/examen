'use strict';

const Sequelize = require('sequelize');

module.exports = function (sequelize) {
  // Define a Sequelize model
  const Hammer = sequelize.define('Hammer', {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.STRING
    }
  });

  return Hammer;
};
