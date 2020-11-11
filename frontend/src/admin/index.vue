<template lang="pug">
  div
    el-tabs(v-model="activeName" @tab-click="handleClick")
      el-tab-pane(label="专家管理" name="first")
        Expert
      el-tab-pane(label="项目管理" name="second")
        Project
</template>
<script>
import Expert from './expert'
import Project from './project'
export default {
  components: { Expert, Project },
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
