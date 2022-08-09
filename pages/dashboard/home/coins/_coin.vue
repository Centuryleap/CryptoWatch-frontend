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

        <div class="right">
          <div class="top">
            <div class="high">
              <span class="text">
                {{ coinData.high_24h }}
              </span>

              <span class="label">
                High
              </span>
            </div>

            <div class="low">
              <span class="text">
                {{ coinData.low_24h }}
              </span>

              <span class="label">
                Low
              </span>
            </div>

            <div class="volume-coin">
              <span class="text">
                {{ coinVolume }}
              </span>

              <span class="label">
                Volume ({{ coinData.symbol.toUpperCase() }})
              </span>
            </div>

            <div class="volume-usd">
              <span class="text">
                {{ usdtVolume }}
              </span>

              <span class="label">
                Volume (USDT)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
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

    coinVolume() {
      const num = this.coinData.btc_volume;
      if (num > 999 && num < 1000000) {
        return (num / 1000).toFixed(2) + "K"; // convert to K for number from > 1000 < 1 million
      } else if (num > 1000000 && num < 1000000000) {
        return (num / 1000000).toFixed(2) + "M"; // convert to M for number from > 1 million
      } else if (num > 1000000000 && num < 1000000000000) {
        return (num / 1000000000).toFixed(2) + "B"; // convert to M for number from > 1 billion
      } else if (num < 900) {
        return num; // if value < 1000, nothing to do
      }
    },

    usdtVolume() {
      const num = this.coinData.usd_volume;
      if (num > 999 && num < 1000000) {
        return (num / 1000).toFixed(2) + "K"; // convert to K for number from > 1000 < 1 million
      } else if (num > 1000000 && num < 1000000000) {
        return (num / 1000000).toFixed(2) + "M"; // convert to M for number from > 1 million
      } else if (num > 1000000000 && num < 1000000000000) {
        return (num / 1000000000).toFixed(2) + "B"; // convert to M for number from > 1 billion
      } else if (num < 900) {
        return num; // if value < 1000, nothing to do
      }
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
  @apply bg-primary-1 rounded-2xl md:rounded-3xl lg:rounded-[32px] py-[34px] px-6 md:px-10 lg:px-16 xl:px-[72] md:pt-12 lg:pt-16 md:pb-[9] lg:pb-[50px];

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
        @apply md:space-y-1 lg:space-y-0;
        span.price {
          @apply text-[#FAFAFA] font-light block md:text-2xl md:font-semibold;
        }

        span.current-price-percentage {
          @apply text-xs font-light text-text-4 md:text-text-3 block md:text-sm xl:text-base;
        }
      }
    }

    > .right {
      @apply hidden md:block;
      > .top {
        @apply space-x-5 lg:space-x-10;

        > .high, .low, .volume-coin, .volume-usd {
          span.text {
            @apply text-[#FAFAFA] text-sm
          }
        }
      }
    }
  }
}
</style>
