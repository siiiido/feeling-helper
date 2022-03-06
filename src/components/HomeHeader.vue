<template>
  <div class="home-header">
    <router-link to="/" >home</router-link>
    <router-link to="/like">like</router-link>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
};
</script>

<style>
.home-header {
  height: 40px;
  background-color: aquamarine;
}
</style>