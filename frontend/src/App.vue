<template lang="pug">
#app
  router-view
</template>

<script>
import Index from './index.vue'

export default {
  name: 'App',
  components: {
    Index
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
