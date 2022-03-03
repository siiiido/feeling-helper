<template>
  <main>
    <img :src="this.catUrl" alt="cat images" />
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
    };
  },
  methods: {
    async axiosData() {
      try {
        const CAT_API_KEY = process.env.VUE_APP_CAT_KEY;
        axios.defaults.headers.common["x-api-key"] = CAT_API_KEY;

        let res = await axios.get(
          "https://api.thecatapi.com/v1/images/search",
          { params: { limit: this.catParams.limit, size: this.catParams.size } }
        );

        return res.data[0].url;
      } catch {
        console.log("Axios error");
      }
    },
  },

  async created() {
    const catData = await this.axiosData();

    this.catUrl = catData;
  },
};
</script>
<style>
</style>

