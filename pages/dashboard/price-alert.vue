<template>
  <div>
    <div class="alerts">
      <PriceAlertTemplate />
      <PriceAlertTemplate />
      <PriceAlertTemplate />
      <PriceAlertTemplate />
      <PriceAlertTemplate />
      <PriceAlertTemplate />
      <PriceAlertTemplate />
      <PriceAlertTemplate />
      <PriceAlertTemplate />
      <PriceAlertTemplate />
      <PriceAlertTemplate />
      <PriceAlertTemplate />
      <PriceAlertTemplate />
      <PriceAlertTemplate />
    </div>
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

<style lang="postcss" scoped>
.alerts {
  @apply space-y-2.5
}
</style>