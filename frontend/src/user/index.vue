<template lang="pug">
  div
    el-button(@click="open()" style="float:left" type="primary" size="mini") 申请
    el-table(:data="projectList")
      el-table-column(prop="interior_code" align="center" label="项目号")
      el-table-column(prop="name" align="center" label="项目名称")
      el-table-column(prop="type" align="center" label="项目类型")
        template(slot-scope="scope")
          span(v-if="scope.row.type === 0")  访谈
          span(v-if="scope.row.type === 1")   调研
      el-table-column(prop="total" align="center" label="项目预算")
      el-table-column(prop="content" align="center" label="项目内容")
      el-table-column(prop="review" align="center" label="项目评审")
      el-table-column(prop="status" align="center" label="项目状态")
        template(slot-scope="scope")
          span(v-if="scope.row.status === 0")  执行
          span(v-if="scope.row.status === 1")  审批
          span(v-if="scope.row.status === 2")  通过
          span(v-if="scope.row.status === -1") 驳回
      el-table-column(prop="operation" align="center" label="操作"  width="150px")
        template(slot-scope="scope")
          el-button( type="primary" size="mini" :disabled="scope.row.status===1 || scope.row.status===2"  @click="open(scope.row,scope.$index)") 修改
          el-button( type="danger" size="mini" :disabled="scope.row.status===1 || scope.row.status===2" @click="del(scope.row)") 删除
    projectDialog(ref="projectDialog" @page="page()")

</template>
<script>
import api from '@/api/project'
import projectDialog from './components/projectDialog'
export default {
  components: { projectDialog },
  data () {
    return {
      projectList: []
    }
  },
  created () {
    this.page()
  },
  methods: {
    page () {
      api.page().then(r => {
        this.projectList = r
      })
    },
    open (data, index) {
      this.$refs.projectDialog.show(data)
    },
    del (data) {
      api.del(data.id).then(r => {
        this.$message.success('删除成功')
        this.page()
      })
    }
  }
}
</script>
