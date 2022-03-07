<template>
  <div>
    <img
      v-for="(src, index) in likeDataAnimal"
      :key="index"
      :src="src.url"
      alt="animal data"
    />
  </div>
</template>

<script>
export default {
  name: "AnimalLike",
  data() {
    return {
      likeDataAnimal: [],
    };
  },
  mounted() {
    this.likeDataAnimal.push(...this.$store.state.likeData);
  },
};
</script>

<style>
</style>