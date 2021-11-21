<template>
  <div id="mainbody">
    <h1>Home</h1>
    <button @click="reset">Reset likes</button>
    <Post />
  </div>
</template>

<script>

import Post from "@/components/Post.vue";
import { mapActions } from "vuex"

export default {
  name: "Mainbody",
  components: { Post },
  methods: {
    ...mapActions({
      reset: 'resetLikes'
    })
  }
};

</script>

<style lang="scss">
#mainbody {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
}

</style>
