<template>

  <div class="post">
    <div class="post-header">
      <img src="@/assets/pea.png" />
      <span class="date-time">1. jaanuar 1970 13:24</span>
    </div>
    <div class="post-content">
      <img src="@/assets/pilt1.png" />
      <p>I think its going to rain </p>
      <p>Aga see sisu ei peaks siit tulema !!!</p>
    </div>
    <div class="post-footer"> <img src="@/assets/thumb.png" /></div>
  </div>

</template>

<script>
export default {
  name: "Post"
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

</style>
