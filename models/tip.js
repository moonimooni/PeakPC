module.exports =  (sequelize, Sequelize) => {
  return sequelize.define('tip', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true
    }
  });
};