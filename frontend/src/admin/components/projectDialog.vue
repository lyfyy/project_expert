<template lang="pug">
  el-dialog(title="项目评审" :visible.sync="dialogVisible")
    el-row(:gutter="10")
      el-form(:model="single" label-width="150px" ref="form")
        el-col(:span="12")
          el-form-item(label="项目号" prop="interior_code")
            el-input(v-model="single.interior_code" disabled)
        el-row
          el-col(:span="12")
            el-form-item(label="项目状态" prop="status")
              el-radio-group(v-model="single.status")
                el-radio(:label="2") 通过
                el-radio(:label="-1") 驳回
          el-col(:span="20")
            el-form-item(label="项目评价" prop="review")
              el-input(v-model="single.review" type="textarea" :autosize="{ minRows: 3, maxRows: 6}")
    .dialog-footer(slot="footer")
      el-button(@click="dialogVisible = false") 关 闭
      el-button(@click="submit" type="primary") 确 定
</template>
<script>
import api from '@/api/project'

export default {
  name: 'projectForm',
  // props: ['item'],
  data () {
    return {
      dialogVisible: false,
      single: {}
    }
  },
  methods: {
    show (val) {
      this.dialogVisible = true
      this.single = val || {}
    },
    submit () {
      api.put(this.single).then(r => {
        this.$message.success('更新成功')
        this.$emit('page')
      })

      this.dialogVisible = false
    }
  }
}
</script>
<style scoped>
.avatar {
  max-width: 100%;
}
</style>
