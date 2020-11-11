const Sequelize = require('sequelize')
var Op = Sequelize.Op

const sequelize = new Sequelize('project', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  dialectOptions: {
    dateStrings: true,
    typeCast: true
  },
  pool: {
    max: 30,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  timezone: '+08:00',
  // 取消sql信息输出
  logging: false,
  define: {
    freezeTableName: true,
    timestamps: false
  }
})

sequelize.authenticate().then(() => {
  console.log('database connection successful !')
  sequelize.sync()
}).catch(err => {
  console.error('Unable to connect to the database:', err)
})

module.exports = {
  sequelize,
  Sequelize,
  Op
}
