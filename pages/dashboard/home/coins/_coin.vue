<template>
  <div>
    <div class="coin-card">
      <div class="coin-card-container between">
        <div class="left between md:block">
          <div class="inner-left start">
            <Icon src="btc" />
            <!-- <img :src="coinData.image" :alt="`An image of the ${coinData.name} coin`"> -->

            <div class="">
              <span class="name">
                {{ coinData.name }}
              </span>

              <span class="short">
                {{ coinData.symbol }}
              </span>
            </div>
          </div>

          <div class="inner-right">
            <span class="price"> ${{ price }} </span>

            <span class="current-price-percentage">
              Current price
              <span
                :class="
                  coinData.price_change_percentage_24h >= 0
                    ? 'text-[#008000]'
                    : 'text-[#E24949]'
                "
                >({{ coinData.price_change_percentage_24h.toFixed(2) }}%)</span
              >
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- {{ coinsData }} -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Coin",
  layout: "dashboard",

  computed: {
    price() {
      var parts = this.coinData.price.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    },
  },

  async asyncData({ params }) {
    const dataApi = `https://cryptowatch-server.herokuapp.com/feed/onecoin/${params.coin}`;

    const coinData = await axios.get(dataApi).then((res) => {
      return res.data.coinData;
    });

    console.log(coinData);

    return { coinData };
  },
};
</script>

<style lang="postcss" scoped>
.coin-card {
  @apply bg-primary-1 rounded-2xl py-[34px] px-6;

  > .coin-card-container {
    @apply w-full;
    > .left {
      @apply w-full md:space-y-7 lg:space-y-10;
      > .inner-left {
        @apply space-x-2;

        img {
          @apply w-10 lg:w-12 xl:w-14;
        }

        span.name {
          @apply text-[#FAFAFA] md:text-lg lg:text-xl xl:text-2xl font-light lg:font-normal xl:font-medium block;
        }

        span.short {
          @apply text-text-4 font-light text-xs lg:text-sm block uppercase;
        }
      }

      > .inner-right {
        span.price {
          @apply text-[#FAFAFA] font-light block md:text-2xl md:font-semibold;
        }

        span.current-price-percentage {
          @apply text-xs font-light text-text-4 block lg:text-sm xl:text-base;
        }
      }
    }
  }
}
</style>
