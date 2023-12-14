<template>
    <div class="">
         <UL></UL>
    </div>
  
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import UL from './components/UserList.vue'
// import store from './store/index'
export default {
  name: 'App',
  components: {
    UL
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
