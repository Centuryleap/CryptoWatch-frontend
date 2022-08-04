<template>
  <Box title="All coins" big>
    <div class="all">
      <Coin />
      <Coin />
      <Coin />
      <Coin />
      <Coin />
      <Coin />
      <Coin />
      <Coin />
      <Coin />
    </div>
  </Box>
</template>

<script>
export default {
  name: "AllCoins",
  title: "All coins",
  layout: "dashboard",
};
</script>

<style lang="postcss" scoped>
.all {
  @apply space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-5 w-full;
}
</style>
