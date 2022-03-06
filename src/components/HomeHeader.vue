<template>
  <div class="home-header">
    <router-link to="/">
      <button>Home</button>
    </router-link>

    <router-link to="/like">
      <button>Like</button>
    </router-link>
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