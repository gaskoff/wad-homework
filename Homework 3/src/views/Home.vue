<template>
  <div id="Home">
    <Mainbody />

  </div>
</template>

<script>

import Mainbody from "@/components/Mainbody.vue";

export default {
  name: "Home",
  components: { Mainbody },
};
</script>

<style>

#Home{
  background-color: SteelBlue;
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
