const sequelize = require('sequelize');
const Schematics = require('./Schematics');
const Images = require('./Images');
const Comments = require('./Comments');
const Users = require('./Users');
const Projects = require('./Projects');


module.exports = function(sequelize, DataTypes) {
  var Pins = sequelize.define("Pins", {
    x: { type: DataTypes.INTEGER, allowNull: false },
    y: { type: DataTypes.INTEGER, allowNull: false }
  });

  Pins.associate = function(models) {

    Pins.hasMany(models.Images,
      {
        foreignKey: {
          name: 'pin_id',
          allowNull: false
        },
        onDelete: 'CASCADE'
      });

    Pins.hasMany(models.Comments,
      {
        foreignKey: {
          name: 'pin_id',
          allowNull: false
        },
        onDelete: 'CASCADE'
      });

    Pins.belongsTo(models.Users,
      {
        foreignKey: {
          name: 'user_id',
          allowNull: false
        }
      });

    Pins.belongsTo(models.Projects,
      {
        foreignKey: {
          name: 'project_id',
          allowNull: false
        }
      });

    Pins.belongsTo(models.Schematics,
      {
        foreignKey: {
          name: 'schematic_id',
          allowNull: false
        }
      });
  };

  return Pins;
};