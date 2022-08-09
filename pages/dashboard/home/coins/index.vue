<template>
  <Box title="All coins" big>
    <div class="all">
      <Coin
        v-for="coin in coinsData.coins"
        :key="coin.id"
        :name="coin.name"
        :short="coin.symbol"
        :amount="coin.current_price"
        :sevenDaysPercentage="coin.price_change_percentage_7d_in_currency"
        :route="coin.id"
      />
    </div>
  </Box>
</template>

<script>
import axios from "axios";
export default {
  name: "AllCoins",
  title: "All coins",
  layout: "dashboard",

  async asyncData() {
    // const imageApi = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C14d";
    const dataApi = "https://cryptowatch-server.herokuapp.com/feed/allcoins";

    // const coinsImage = await axios.get(imageApi).then((res) => { return res.data});
    const coinsData = await axios.get(dataApi).then((res) => {
      return res.data;
    });

    // console.log(coinsImage);
    return { coinsData };
  },
};
</script>

<style lang="postcss" scoped>
.all {
  @apply space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-5 w-full;
}
</style>
