<template>

  <div class="post">
    <div class="post-header">
      <img :src='getPosts[7].icon' />
      <span class="date-time">{{getPosts[7].date}}</span>
    </div>
    <div class="post-content">
      
      <p>{{getPosts[7].content}} </p>
      
    </div>
    <div class="post-footer"> <input @click="increment" type="image" :src='getPosts[7].likeButton' /><p>Number of likes: {{getPosts[7].likeCount}}</p></div>
    
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "Post8",
  computed: {
    ...mapGetters(['getPosts'])
  }
};
</script>

<style lang="scss">

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