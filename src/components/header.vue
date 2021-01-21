<template>
<nav>
  <ul>
    <il><router-link to="/">Main Page</router-link></il>|
    <il><router-link to="/add">Add person</router-link></il>

  </ul>
</nav>
</template>

<script>
export default {
name: "header"
}
</script>

<style scoped>
ul{
  list-style-type: none;
  text-align: center;
  margin: 0;
}
li{
  display: inline-block;
  margin: 0 10px;
}
a{
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}
nav{
  background: #444;
  padding: 14px 0;
  margin-bottom: 40px;
}
</style>