<template>
  <div class="nav" id="header">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About us</router-link> |
    <router-link to="/contactus">Contact us</router-link>
  </div>

</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss">
#header {
  background-color: pink;
}

</style>
