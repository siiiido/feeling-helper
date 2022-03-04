<template>
  <main class="main">
    <div class="img-container" v-if="this.loading">
      <img
        v-for="(src, index) in this.animalData"
        :key="index"
        :src="src.url"
        alt="animal images"
        class="image-box"
      />
    </div>
    <div class="loading-container" v-if="!this.loading">loading</div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeMain",
  data() {
    return {
      loading: false,
      animalData: [],
      catParams: {
        limit: 5,
        size: "full",
        format: "json",
      },
      dogParams: {
        limit: 5,
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

        return res.data;
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

        return res.data;
      } catch {
        console.log("axiosDogData error");
      }
    },
    async getAnimalData() {
      const catDatas = await this.axiosCatData();
      const dogDatas = await this.axiosDogData();

      for (let i = 0; i < catDatas.length; i++) {
        this.animalData.push({ url: catDatas[i].url, id: catDatas[i].id });
        this.animalData.push({ url: dogDatas[i].url, id: dogDatas[i].id });
        this.loading = true;
      }
    },
  },

  async created() {
    await this.getAnimalData();
  },
};
</script>
<style>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: antiquewhite;
}
.img-container {
  display: flex;
  flex-direction: column;
  background-color: yellow;
}
.image-box {
  margin-top: 20px;
  width: 500px;
  height: 300px;
  object-fit: cover;
}
</style>

