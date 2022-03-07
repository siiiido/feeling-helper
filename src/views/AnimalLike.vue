<template>
  <div>
    <img
      v-for="(src, index) in likeDataAnimal"
      :key="index"
      :src="src.url"
      alt="animal data"
      @click="deleteImg(src)"
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
  methods: {
    deleteImg(src){
      this.$store.commit("minus", src.id)
    }
  },
  mounted() {
    this.likeDataAnimal.push(...this.$store.state.likeData);
  },
};
</script>

<style>
</style>