<template>
  <main>
    <img :src="this.catUrl" alt="cat images" />
    <img :src="this.dogUrl" alt="dog images" />
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeMain",
  data() {
    return {
      catUrl: [],
      catParams: {
        limit: 1,
        size: "full",
        format: "json",
      },
      dogUrl: [],
      dogParams: {
        limit: 1,
        size: "full",
        format: "json",
      },
    };
  },
  methods: {
    async axiosCatData() {
      try {
        const CAT_API_KEY = process.env.VUE_APP_CAT_KEY;
        axios.defaults.headers.common["x-api-key"] = CAT_API_KEY;

        let res = await axios.get(
          "https://api.thecatapi.com/v1/images/search",
          { params: { limit: this.catParams.limit, size: this.catParams.size } }
        );

        return res.data[0].url;
      } catch {
        console.log("axiosCatData error");
      }
    },
    async axiosDogData() {
      try {
        const DOG_API_KEY = process.env.VUE_APP_DOG_KEY;
        axios.defaults.headers.common["x-api-key"] = DOG_API_KEY;

        let res = await axios.get(
          "https://api.thedogapi.com/v1/images/search",
          { params: { limit: this.dogParams.limit, size: this.dogParams.size } }
        );

        return res.data[0].url;
      } catch {
        console.log("axiosDogData error");
      }
    },
  },

  async created() {
    const catData = await this.axiosCatData();
    const dogData = await this.axiosDogData();

    this.catUrl = catData;
    this.dogUrl = dogData;
  },
};
</script>
<style>
</style>

