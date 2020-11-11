const expertInfo = require('../db/model/expert')
class Expert {
  constructor(id) {
    this.id = id
  }
  static async add (info) {
    await expertInfo.create(info)
    return true
  }
  static async page () {
    const result = await expertInfo.findAll()
    return result
  }
  static async put (info) {
    await expertInfo.update(info, { where: { id: info.id } })
    return true
  }
  static async delete (id) {
    await expertInfo.destroy({ where: { id } })
    return true
  }
}

module.exports = Expert