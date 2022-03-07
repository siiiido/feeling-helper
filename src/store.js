import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      likeData: [],
    };
  },
  mutations: {
    add(state, payload) {
      state.likeData = [...payload];
    },
    minus(state, payload){
      let filterArr = state.likeData.filter(function(data) {
        return data.id != payload
      })
      state.likeData = [...filterArr];
    }
  },
});

export default store;
