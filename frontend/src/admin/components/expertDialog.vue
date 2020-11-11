<template lang="pug">
  el-dialog(title="专家信息" :visible.sync="dialogVisible")
    el-row(:gutter="10")
      el-form(:model="single" label-width="150px" ref="form")
        el-col(:span="12")
          el-form-item(label="名称" prop="name")
            el-input(v-model="single.name")
          el-form-item(label="专家所在地" prop="local")
            el-input(v-model="single.local")
          el-form-item(label="特长" prop="speciality")
            el-input(v-model="single.speciality" )
          el-form-item(label="专家性别" prop="gender")
            el-radio-group(v-model="single.gender")
              el-radio(:label="0") 男
              el-radio(:label="1") 女
        el-col(:span="12")
          el-form-item(label="手机号" prop="phone")
            el-input(v-model="single.phone")
          el-form-item(label="company" prop="company")
            el-input(v-model="single.company")
          el-form-item(label="专家职位" prop="title")
            el-input(v-model="single.title")
    .dialog-footer(slot="footer")
      el-button(@click="dialogVisible = false") 关 闭
      el-button(@click="submit" type="primary") 确 定
</template>
<script>
import api from '@/api/expert'

export default {
  name: 'expertForm',
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
        api.addExpert(this.single).then(r => {
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
