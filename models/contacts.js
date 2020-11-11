module.exports =  (sequelize, Sequelize) => {
  return sequelize.define('contacts', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    tel: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });
};