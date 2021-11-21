<template>

  <div class="post">
    <div class="post-header">
      <img :src='getPosts[9].icon' />
      <span class="date-time">{{getPosts[9].date}}</span>
    </div>
    <div class="post-content">
      <img :src='getPosts[9].image' />
      <p>{{getPosts[9].content}} </p>
      
    </div>
    <div class="post-footer"> <input @click="add" type="image" :src='getPosts[9].likeButton' /><p>Number of likes: {{result}}</p></div>
    
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "Post10",
  computed: {
    ...mapGetters(['getPosts'])
  },
  data () {
    return {
      result: 0
    }
  },
  props: ['value'],
  methods: {
    emitResult () {
      this.$emit('input', this.result)
    },
    add () {
      this.result += 1
      this.emitResult()
    },
    reset (){
      this.result = 0
      this.emitResult()
    }
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