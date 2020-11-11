// const Sequelize = require('sequelize')
const { sequelize, Sequelize } = require('../index')
const Model = Sequelize.Model
class Project extends Model { }

Project.init({
  interior_code: {
    type: Sequelize.STRING,
    allowNull: false,
    comment: '项目号'
  },
  name: {
    type: Sequelize.STRING,
    comment: '项目名称'
  },
  // 项目状态为 0 执行 1 审批 2完成 -1 驳回
  status: {
    type: Sequelize.INTEGER,
    comment: '项目状态'
  },
  review: {
    type: Sequelize.STRING,
    comment: '项目评价'
  },
  // 项目预算
  total: {
    type: Sequelize.INTEGER,
    comment: '项目预算'
  },
  // 项目类型 0 访谈 1 调研 2 其他
  type: {
    type: Sequelize.INTEGER,
    comment: '项目类型'
  },
  // 项目内容
  content: {
    type: Sequelize.TEXT,
    comment: '项目内容'
  }
}, {
  sequelize,
  timestamps: false,
  modelName: 'project_info'
})

Project.sync({ force: false })

module.exports = Project
