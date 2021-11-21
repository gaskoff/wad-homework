<template>
  <div id="mainbody">
    <h1>Home</h1>
    <button @click="reset">Reset likes</button>
    <Post />
<!--    <Post1 ref="a"/>
    <Post2 ref="b"/>
    <Post3 ref="c"/>
    <Post4 ref="d"/>
    <Post5 ref="e"/>
    <Post6 ref="f"/>
    <Post7 ref="g"/>
    <Post8 ref="h"/>
    <Post9 ref="i"/>
    <Post10 ref="j"/> -->
  </div>

</template>

<script>

import Post from "@/components/Post.vue";
import { mapGetters } from "vuex"

/*
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
*/
export default {
  name: "Mainbody",
  components: { Post },
  computed: {
    ...mapGetters(["getPosts"])
  },
  methods: {
    reset (){
      console.log('midagi toimub');
      this.getPosts.resetLikeCount;
      console.log('midagi toimub 2');

    }
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
