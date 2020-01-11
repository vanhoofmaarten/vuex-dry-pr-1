<template>
  <section>
    <ul>
      <li v-for="({title, id}) in posts" :key="id">{{ title }}</li>
    </ul>
  </section>
</template>

<script>
import { get, $action } from "vuex-dry";

export default {
  async fetch() {
    await $action("posts/list$fetch");
  },

  computed: {
    posts: get("posts/list")
  }
};
</script>
