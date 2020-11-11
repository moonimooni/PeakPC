module.exports =  (sequelize, Sequelize) => {
  return sequelize.define('recipe', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    category: {
      type: Sequelize.STRING,
      allowNull: false
    },
    food_pic: {
      type: Sequelize.STRING,
      allowNull: true
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
};