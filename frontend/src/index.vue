<template lang="pug">
  div
    router-link(:to="{ path: `/admin` }" target="_blank" )
      el-button(type='primary') 管理员
    router-link(:to="{ path: `/user` }" target="_blank" )
      el-button(type='success' style="margin-left:20px") 用户
</template>

<script>

export default {
  name: 'Index',
  created () {
  },
  methods: {

  }
}
</script>

<style>
</style>
