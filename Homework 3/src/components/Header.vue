<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About us</router-link> | 
    <router-link to="/contactus">Contact us</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: "Header"
};
</script>