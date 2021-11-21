<template>
  <div id="mainbody">
    <h1>main body with posts</h1>

    <h2>dsfhsghdfh</h2>
    <div class="post" v-for="post in posts" :key="post.id">
      <div class="post-header">
        <img src="@/assets/pea.png" />
        <span class="date-time">{{post.create_time}}</span>
      </div>
      <div class="post-content">
        <img src={{post.img}} />
        <h1>{{post.title}}</h1>
        <p>{{post.body}} </p>

      </div>
      <div class="post-footer"> <img src="@/assets/thumb.png" /></div>
    </div>
    <p>spskdjffsdf</p>
  </div>

</template>

<script>
/*import Post from "@/components/Post.vue";*/
export default {
  name: "Mainbody",
  /*components: { Post }*/

  computed: {
    posts() {
      return this.$store.state.posts
  }}
}
</script>

<style lang="scss">
#mainbody {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
}

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

</style>
