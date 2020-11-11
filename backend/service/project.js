const projectInfo = require('../db/model/project')
const Op = require('../db/index').Op

class Porject {
  constructor(id) {
    this.id = id
  }
  static async add (info) {
    await projectInfo.create(info)
    return true
  }
  static async page () {
    const result = await projectInfo.findAll()
    return result
  }
  static async projectPage (status) {
    var query = { status: { [Op.ne]: 0 } }
    if (JSON.stringify(status) !== '{}') {
      query = { status: Number(status) }
    }
    const result = await projectInfo.findAll({ where: query })
    return result
  }
  static async put (info) {
    await projectInfo.update(info, { where: { id: info.id } })
    return true
  }
  static async delete (id) {
    await projectInfo.destroy({ where: { id } })
    return true
  }
}

module.exports = Porject