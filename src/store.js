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
  },
});

export default store;
