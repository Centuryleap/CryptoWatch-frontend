<template>
  <div class="space-y-14">
    <Box title="My watchlist" big link="View all" to="/dashboard/watchlist">
      <div class="watchlist">
        <div class="watchlist-container">
          <WatchCard />
          <WatchCard />
          <WatchCard />
          <WatchCard />
          <WatchCard />
        </div>
      </div>
    </Box>

    <Box title="All coins" big link="View all" to="/dashboard/home/coins">
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
  </div>
</template>

<script>
import Modal from "~/components/Modals/Modal.vue";
import Box from "../../../components/Box.vue";
export default {
  name: "Home",
  title: "Home dashboard",
  layout: "dashboard",
  components: {
    Modal,
    Box,
  },
};
</script>

<style lang="postcss" scoped>
.watchlist {
  @apply -mx-6 min-w-full overflow-x-scroll lg:m-0 lg:overflow-auto;
  > .watchlist-container {
    @apply flex space-x-4 lg:space-x-0 lg:gap-x-5 xl:gap-x-6 flex-nowrap shrink-0 lg:grid lg:grid-cols-5;

    > div {
      @apply min-w-[164px] first:ml-6 lg:first:ml-0;
    }
  }
}

.all {
  @apply space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-5 w-full;
}
</style>
