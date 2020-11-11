module.exports =  (sequelize, Sequelize) => {
  return sequelize.define('qna', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    question: {
      type: Sequelize.STRING,
      allowNull: false
    },
    answer: {
      type: Sequelize.STRING,
      allowNull: false
    },
    desc_pic: {
      type: Sequelize.STRING,
      allowNull: true
    }
  });
};