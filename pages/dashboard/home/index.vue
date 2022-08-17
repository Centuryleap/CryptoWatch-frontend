<template>
  <div class="space-y-14">
    <!-- <div v-if="$nuxt.isOffline">You are offline</div> -->

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
    <!-- <button class="bg-black" @click="$nuxt.refresh()">lol</button> -->


    <Box title="All coins" big link="View all" to="/dashboard/home/coins">
      <div class="all">
        <Coin v-for="coin in coinsData.coins.slice(0, 5)" :key="coin.id" :src="coin.image" :name="coin.name"
          :short="coin.symbol" :amount="coin.current_price"
          :sevenDaysPercentage="coin.price_change_percentage_7d_in_currency" :route="coin.id"
          :seriesData="coin.sparkline_in_7d.price" />
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
  //     coinImage: [],
  //   };
  // },

  async asyncData() {
    // const imageApi = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd÷&order=market_cap_desc&per_page=1&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C14d";
    const dataApi = "https://cryptowatch-server.herokuapp.com/feed/allcoins";

    // const coinsImage = await axios.get(imageApi).then((res) => { return res.data});
    const coinsData = await axios.get(dataApi).then((res) => { return res.data });

    // console.log(coinsImage);
    return { coinsData };
  },

  mounted() {
    // Refresh api calls every 120 seconds
    setInterval(() => {
      this.$nuxt.refresh();
    }, 120000);
  }
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
