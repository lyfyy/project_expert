<template lang="pug">
  el-dialog(title="申请项目" :visible.sync="dialogVisible")
    el-row(:gutter="10")
      el-form(:model="single" label-width="150px" ref="form")
        el-col(:span="12")
          el-form-item(label="项目号" prop="interior_code")
            el-input(v-model="single.interior_code")
          el-form-item(label="项目名称" prop="name")
            el-input(v-model="single.name")
          el-form-item(label="项目类型" prop="type")
            el-radio-group(v-model="single.type")
              el-radio(:label="0") 访谈
              el-radio(:label="1") 调研
        el-col(:span="12")
          el-form-item(label="项目内容" prop="content")
            el-input(v-model="single.content")
          el-form-item(label="项目预算" prop="total")
            el-input-number(v-model="single.total" )
          el-form-item(label="项目状态" prop="status")
            el-radio-group(v-model="single.status")
              el-radio(:label="0") 执行
              el-radio(:label="1") 完成
    .dialog-footer(slot="footer")
      el-button(@click="dialogVisible = false") 关 闭
      el-button(@click="submit" type="primary" :disabled="single.review") 确 定
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
      if (this.single.id) {
        api.put(this.single).then(r => {
          this.$message.success('更新成功')
          this.$emit('page')
        })
      } else {
        api.add(this.single).then(r => {
          this.$message.success('添加成功')
          this.$emit('page')
        })
      }

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
