<template>
  <div id="mainbody">
    <h1>main body with posts</h1>
    <Post />
    <p>spskdjffsdf</p>
  </div>

</template>

<script>
import Post from "@/components/Post.vue";
export default {
  name: "Mainbody",
  components: { Post }
};
</script>

<style lang="scss">
#mainbody {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
