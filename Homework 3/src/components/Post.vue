<template>

  <div class="post" v-for="post in getPosts" :key="post.id">
    <div class="post-header">
      <img :src="post.icon" />
      <span class="date-time">{{ post.date }}</span>
    </div>

    <div class="post-content">
      <img :src="post.image" />
      <p>{{ post.content }} </p>
    </div>

    <div class="post-footer">
      <input @click="add2(post.id)" type="image" :src="post.likeButton" />
      <p>Number of likes: {{ post.likeCount }}</p>
    </div>
  </div>

</template>

<script>
import { mapGetters } from "vuex"
import { mapActions } from "vuex"

export default {
  name: "Post",
  computed: {
    ...mapGetters(["getPosts"])
  },
  methods: {
    ...mapActions({
      add2: 'addLike'
    })
  }
};
</script>

<style>

  .post{
    width: 60%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 10px;
    border-radius: 2px;
  }
  .date-time{
    font-size: x-small;
    font-family: Verdana, sans-serif;
    color: gray;
  }

  .post-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
    background-color: white;
  }

  .post-header > img, .post-footer > img{
    height: 25px;
  }

  .post-content{
    margin: 5px;
  }

  .post-content > img{
    width: 100%;
  }

  .post-content > h1{
    font-size: 1em;
    text-transform: uppercase;
  }
  p{
    text-align: left;
  }
  input{
      width: 40px;
      height: 40px;
      float: left;
  }

</style>
