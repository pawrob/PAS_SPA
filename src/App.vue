
<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import HelloWorld from './components/addReader.vue'
import displayResources from "@/components/displayPeople";
import header from "@/components/header";
import updatePerson from "@/components/update/updatePerson";


export default {
  name: 'App',
  components: {
    'hello-world': HelloWorld,
    'show-resources': displayResources,
    'updatePerson': updatePerson,
    'app-header': header
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
