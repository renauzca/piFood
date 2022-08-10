const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    healthScore: {
      type: DataTypes.INTEGER
    },
    instructions:{
      type: DataTypes.TEXT,
      
    },
    image:{
      type: DataTypes.TEXT,
      
    },
    dishTypes:{
      type: DataTypes.TEXT,
      
    },
    createForMe:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },

  },
  {timestamps: false});
};
