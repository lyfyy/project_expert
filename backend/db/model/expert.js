const { sequelize, Sequelize } = require('../index')
const Model = Sequelize.Model
class ExpertInfo extends Model { }
// 专家表
ExpertInfo.init({
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '专家名称'
  },
  local: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '专家所在地'
  },
  gender: {
    type: Sequelize.INTEGER,
    comment: '专家性别'
  },
  phone: {
    type: Sequelize.STRING,
    comment: '手机号'
  },
  company: {
    type: Sequelize.STRING,
    comment: 'company'
  },
  title: {
    type: Sequelize.STRING,
    comment: '专家职位'
  },
  speciality: {
    type: Sequelize.TEXT,
    comment: '特长'
  }
}, {
  sequelize,
  modelName: 'expert_info'
})

module.exports = ExpertInfo
