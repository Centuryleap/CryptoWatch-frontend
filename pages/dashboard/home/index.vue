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
        <Coin v-for="coin in coins" :key="coin.id" :src="coin.image" />
      </div>
    </Box>
  </div>
</template>

<script>
import axios from "axios";
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

  // data() {
  //   return {
  //     coins: [],
  //     loading: true,
  //     error: null,
  //   };
  // },

  async asyncData() {
    const api = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C14d";
    const coins = await axios.get(api).then((res) => { return res.data});
    return { coins };
  },

  // async mounted() {
  //   this.coins = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C14d");
  //   console.log(this.coins);
  // }
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
