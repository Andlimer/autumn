export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SET_CATEGORIES: (state, data) => state.categories = data
  },
  actions: {
    async addCategory(store, title) {
      try {
        const response = await this.$axios.post("/categories", { title });

        // const user = await this.$axios.get("/user");
        // console.log(user);

      } catch(error) {
        throw new Error(
          error.response.data.error ||error.response.data.message
        );
      }
    },

    async fetchCategories({commit}) {
      try {
        const { data } = await this.$axios.get("/categories/274");
        commit("SET_CATEGORIES", data);
        console.log(data);
      } catch(error) {

      }
    }
  }
};