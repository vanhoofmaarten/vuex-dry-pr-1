import { Module } from "vuex-dry";

export default Module.build({
  state: () => ({
    list: []
  }),

  actions: {
    list$fetch({ commit }) {
      const data = this.$http(
        "https://jsonplaceholder.typicode.com/posts?_start=0&_limit=15"
      );
      commit("name$assign", data);
    }
  }
});
