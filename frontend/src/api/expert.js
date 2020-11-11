import core from './core'
const output = {}

function addExpert (params) {
  return core.ajax(params, '/expert/add', 'post')
}
output.addExpert = addExpert

function page () {
  return core.ajax({}, '/expert/page', 'get')
}
output.page = page

function put (params) {
  return core.ajax(params, '/expert/put', 'put')
}
output.put = put

function del (id) {
  return core.ajax({ id }, '/expert/del', 'delete')
}
output.del = del

export default output
