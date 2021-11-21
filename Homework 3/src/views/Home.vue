<template>
  <div id="Home">
    <Mainbody />

  </div>
</template>

<script>
// @ is an alias to /src
import Mainbody from "@/components/Mainbody.vue";

export default {
  name: "Home",
  components: { Mainbody }

};
</script>

<style lang="scss">
#Home {
  background-color: green;
}
</style>
