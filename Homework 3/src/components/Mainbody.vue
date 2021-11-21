<template>
  <div id="mainbody">
    <h1>Home</h1>
    <Post1 />
    <Post2 />
    <Post3 />
  </div>

</template>

<script>
import Post1 from "@/components/Post1.vue";
import Post2 from "@/components/Post2.vue";
import Post3 from "@/components/Post3.vue";
export default {
  name: "Mainbody",
  components: { Post1, Post2, Post3 }
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
