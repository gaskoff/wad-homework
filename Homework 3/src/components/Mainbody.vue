<template>
  <div id="mainbody">
    <h1>Home</h1>
    <Post1 />
    <Post2 />
    <Post3 />
    <Post4 />
    <Post5 />
    <Post6 />
    <Post7 />
    <Post8 />
    <Post9 />
    <Post10 />
  </div>

</template>

<script>
import Post1 from "@/components/Post1.vue";
import Post2 from "@/components/Post2.vue";
import Post3 from "@/components/Post3.vue";
import Post4 from "@/components/Post4.vue";
import Post5 from "@/components/Post5.vue";
import Post6 from "@/components/Post6.vue";
import Post7 from "@/components/Post7.vue";
import Post8 from "@/components/Post8.vue";
import Post9 from "@/components/Post9.vue";
import Post10 from "@/components/Post10.vue";
export default {
  name: "Mainbody",
  components: { Post1, Post2, Post3, Post4, Post5, Post6, Post7, Post8, Post9, Post10 }
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
