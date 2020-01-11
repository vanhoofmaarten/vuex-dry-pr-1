import { Module } from "vuex-dry";

export default Module.build({
  state: () => ({
    list: []
  }),

  actions: {
    async list$fetch({ commit }) {
      const data = await this.$http.$get(
        "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=15"
      );
      commit("list$assign", data);
    }
  }
});
