const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASS,
  { dialect: 'mysql', host: process.env.DB_HOST }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Contact = require('./contacts')(sequelize, Sequelize);
// db.Equipment = require('./equip_loc')(sequelize, Sequelize);
db.QnA = require('./qna')(sequelize, Sequelize);
db.Recipe = require('./recipe')(sequelize, Sequelize);
db.Staff = require('./staff')(sequelize, Sequelize);
db.Tip = require('./tip')(sequelize, Sequelize);

module.exports = db;