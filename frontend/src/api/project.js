import core from './core'
const output = {}

function add (params) {
  return core.ajax(params, '/project/add', 'post')
}
output.add = add

function page () {
  return core.ajax({}, '/project/page', 'get')
}
output.page = page

function put (params) {
  return core.ajax(params, '/project/put', 'put')
}
output.put = put

function del (id) {
  return core.ajax({ id }, '/project/del', 'delete')
}
output.del = del

function projectPage (status) {
  return core.ajax({ status }, '/project/projectPage', 'get')
}
output.projectPage = projectPage
export default output
