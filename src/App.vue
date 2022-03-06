<template>
  <HomeHeader />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import HomeHeader from "@/components/HomeHeader.vue";

export default {
  name: "App",
  components: {
    HomeHeader,
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
