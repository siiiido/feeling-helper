import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      likeData: [],
    };
  },
  mutations: {
    add(state, payload) {
      if (!state.likeData.length) {
        state.likeData.push(payload);
      } else {
        let findDuplicate = state.likeData.find((item) => {
          return item.id === payload.id;
        });
        if (!findDuplicate) {
          state.likeData.push(payload);
        }
      }
    },
    minus(state, payload) {
      let filterArr = state.likeData.filter((data) => {
        return data.id !== payload;
      });
      state.likeData = [...filterArr];
    },
  },
});

export default store;
