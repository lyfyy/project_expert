<template lang="pug">
  div
    el-button(@click="open()" style="float:left" type="primary" size="mini") 添加
    el-table(:data="expertList")
      el-table-column(prop="name" align="center" label="专家名称")
      el-table-column(prop="local" align="center" label="专家所在地")
      el-table-column(prop="gender" align="center" label="专家性别")
        template(slot-scope="scope")
          span(v-if="scope.row.gender === 0")  男
          span(v-if="scope.row.gender === 1")   女
      el-table-column(prop="phone" align="center" label="手机号")
      el-table-column(prop="company" align="center" label="公司")
      el-table-column(prop="title" align="center" label="专家职位")
      el-table-column(prop="speciality" align="center" label="特长")
      el-table-column(prop="operation" align="center" label="操作"  width="150px")
        template(slot-scope="scope")
          el-button( type="primary" size="mini" @click="open(scope.row,scope.$index)") 修改
          el-button( type="danger" size="mini" @click="del(scope.row)") 删除
    expertDialog(ref="expertDialog" @page="page()")

</template>
<script>
import api from '@/api/expert'
import expertDialog from './components/expertDialog'
export default {
  components: { expertDialog },
  data () {
    return {
      expertList: []
    }
  },
  created () {
    this.page()
  },
  methods: {
    page () {
      api.page().then(r => {
        this.expertList = r
      })
    },
    open (data, index) {
      this.$refs.expertDialog.show(data)
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
