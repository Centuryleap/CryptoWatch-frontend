<template>
  <div>
    <PriceAlertTemplate />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: "PriceAlert",
  title: "Price alert",
  layout: "dashboard",

  computed: {
    ...mapState(["modalOpened"])
  },

  methods: {
    ...mapMutations(["toggleModal"])
  },
}
</script>

<style>

</style>