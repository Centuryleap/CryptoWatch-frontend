<template>
  <div class="space-y-4 md:space-y-5 lg:space-y-7 xl:space-y-8">
    <div class="coin-card">
      <div class="coin-card-container">
        <div class="left between md:block">
          <div class="inner-left start">
            <!-- <Icon src="btc" /> -->
            <img :src="coinData.image.large" :alt="`An image of the ${coinData.name} coin`">

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

        <div class="right md:col-between">
          <div class="top between">
            <div class="high">
              <span class="text">
                {{ addComma(coinData.high_24h) }}
              </span>

              <span class="label"> High </span>
            </div>

            <div class="low">
              <span class="text">
                {{ addComma(coinData.low_24h) }}
              </span>

              <span class="label"> Low </span>
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

              <span class="label"> Volume (USDT) </span>
            </div>
          </div>

          <div class="bottom end">
            <button class="set-price-alert" @click="toggleModal">
              Set price alert
            </button>

            <button class="add-to-watchlist">
              <Icon src="star-outline" class="inline" />

              <span>Add to watchlist</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="graph">
      <client-only>
        <Graph
          :series="chart.series"
          :chartOptions="chart.chartOptions"
          :minWidth="300"
          :height="300"
        />
      </client-only>

      <div class="selectors evenly">
        <button
          v-for="filter in filters"
          :key="filter.id"
          :class="{ active: filter.id === position }"
          @click="position = filter.id"
        >
          {{ filter.name }}
        </button>
      </div>
    </div>

    <div class="mobile-coin-details">
      <div class="high">
        <span class="text">
          {{ addComma(coinData.high_24h) }}
        </span>

        <span class="label text-[#00A31A]"> High </span>
      </div>

      <div class="low place-self-end min-w-[100px]">
        <span class="text">
          {{ addComma(coinData.low_24h) }}
        </span>

        <span class="label text-[#E52F15]"> Low </span>
      </div>

      <div class="volume-coin">
        <span class="text">
          {{ coinVolume }}
        </span>

        <span class="label volume">
          Volume ({{ coinData.symbol.toUpperCase() }})
        </span>
      </div>

      <div class="volume-usd place-self-end min-w-[100px]">
        <span class="text">
          {{ usdtVolume }}
        </span>

        <span class="label volume"> Volume (USDT) </span>
      </div>
    </div>

    <Modal
      title="Set Price alert"
      description="Get notified when the coin price get to your set price"
      v-if="modalOpened"
    >
      <div class="selected-coin-info between w-full">
        <div class="coin-info start">
          <Icon src="btc" class="w-11" />

          <div>
            <span class="name"> {{ coinData.name }} </span>

            <span class="short"> {{ coinData.symbol.toUpperCase() }} </span>
          </div>
        </div>

        <div class="current">
          <span class="short"> {{ coinData.symbol.toUpperCase() }}/USD </span>

          <span class="amount"> ${{ price }} </span>
        </div>
      </div>

      <div class="inputs">
        <div class="high between">
          <div class="label flex items-center">
            <Icon src="up" class="w-4" />

            <span class="text-[#008000] text-xs lg:text-sm font-light"
              >High</span
            >
          </div>

          <input type="text" v-model="high" />
        </div>

        <div class="low between">
          <div class="label flex items-center">
            <Icon src="down" class="w-4" />

            <span class="text-[#E24949] text-xs lg:text-sm font-light"
              >Low</span
            >
          </div>

          <input type="text" v-model="low" />
        </div>
      </div>

      <ActionButton class="mt-10 lg:mt-14 mb-4 lg:mb-7">
        Set alert
      </ActionButton>
    </Modal>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapMutations } from "vuex";

export default {
  name: "Coin",
  layout: "dashboard",

  data() {
    return {
      high: "$20,000.67",
      low: "$20,000.67",
      position: 0,
      filters: [
        {
          id: 0,
          name: "1H",
        },
        {
          id: 1,
          name: "1D",
        },
        {
          id: 2,
          name: "1W",
        },
        {
          id: 3,
          name: "1M",
        },
        {
          id: 4,
          name: "1Y",
        },
        {
          id: 5,
          name: "ALL",
        },
      ],

      chart: {
        series: [
          {
            name: "series1",
            data: () => []
          },
        ],
        chartOptions: {
          chart: {
            type: "line",
            toolbar: false,
            foreColor: "#999999",
            offsetX: 0,
            sparkline: {
              enabled: true,
            },
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            type: "Number",
            min: 0,
          },
          tooltip: {
            x: {
              format: "dd/MM/yy HH:mm",
            },
          },
          legend: {
            show: false,
          },

          colors: ["#008000"],
          stroke: {
            show: true,
            curve: "straight",
            width: 2,
            lineCap: "round",
          },

          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.2,
              opacityTo: 0.4,
              stops: [0, 100, 100],
            },
          },
        },
      },
    };
  },

  methods: {
    ...mapMutations(["toggleModal"]),

    addComma(number) {
      var parts = number.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      // console.log(parts.join("."))
      return parts.join(".");
    },
  },

  computed: {
    ...mapState(["modalOpened"]),

    price() {
      return this.addComma(this.coinData.price);
    },

    // sparkline() {
    //   if (this.coinData.sparkline) {
    //     console.log(this.coinData.sparkline, "sparkline");
    //     return this.coinData.sparkline.value;
    //   } else {
    //     console.log(this.coinData.sparkline, "sparkline");
    //     return [];
    //   }
    // },

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

    // this.chart.series.data = coinData.sparkline.price

    console.log(coinData);

    return { coinData };
  },

  mounted() {
    this.chart.series[0].data = this.coinData.sparkline.price;


    console.log(this.chart.series[0].data, "series", this.coinData.sparkline.price);
  }
};
</script>

<style lang="postcss" scoped>
.coin-card {
  @apply bg-primary-1 rounded-2xl md:rounded-3xl lg:rounded-[32px] py-[34px] px-6 md:px-10 lg:px-16 xl:px-[72] md:pt-12 lg:pt-16 md:pb-[9] lg:pb-[50px] xl:pb-14 max-w-[1080px];

  > .coin-card-container {
    @apply w-full flex justify-between;
    > .left {
      @apply w-full md:space-y-7 lg:space-y-10 md:w-1/2;
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
          @apply text-[#FAFAFA] font-light block md:text-2xl xl:text-[32px] xl:leading-[37px] md:font-semibold;
        }

        span.current-price-percentage {
          @apply text-xs font-light text-text-4 md:text-text-3 block md:text-sm xl:text-base;
        }
      }
    }

    > .right {
      @apply hidden md:flex w-1/2;
      > .top {
        @apply space-x-5 lg:space-x-10 w-full;

        > .high,
        .low,
        .volume-coin,
        .volume-usd {
          span.text {
            @apply text-[#FAFAFA] text-sm lg:text-base block;
          }

          span.label {
            @apply text-[10px] xl:text-xs text-text-3 font-light block;
          }
        }
      }

      > .bottom {
        @apply space-x-4 xl:space-x-[18px] min-w-full;

        > .set-price-alert {
          @apply rounded-[12px] py-3 lg:py-[13px] px-2.5 lg:px-3 bg-primary-3 font-light text-xs lg:text-sm text-white;
        }

        > .add-to-watchlist {
          @apply rounded-[12px] py-3 px-3 text-sm lg:text-base font-light text-[#FAFAFA] bg-[#F44B03] inline-flex items-center space-x-1;
        }
      }
    }
  }
}

.graph {
  @apply p-4 pt-[22px] md:p-5 md:pt-6 lg:px-12 lg:pb-6 lg:pt-10 bg-white rounded-2xl lg:rounded-[32px] max-w-[1080px] lg:h-[422px];

  > .selectors {
    @apply mt-1.5 md:mt-2 lg:mt-3 xl:mt-3.5;
    button {
      @apply rounded-[4px] md:rounded-md lg:rounded-xl py-1 w-[24px] md:py-2 md:w-[32px] lg:py-2.5 xl:w-[44px] text-[#666666] text-[10px] md:text-xs lg:text-sm xl:text-base bg-[#F0F4FE] duration-300;

      &.active {
        @apply bg-primary-3 text-white;
      }
    }
  }
}

.mobile-coin-details {
  @apply p-6 grid grid-cols-2 gap-6 rounded-2xl bg-white md:hidden;

  span.text {
    @apply text-text-2 font-light block;
  }

  span.label {
    @apply text-xs font-light block;
    &.volume {
      @apply text-text-3;
    }
  }
}

.selected-coin-info {
  @apply mt-8 lg:mt-10;
  > .coin-info {
    @apply space-x-2;

    > div {
      @apply space-y-1;
      span.name {
        @apply text-sm lg:text-base font-medium text-[#01071D] block;
      }

      span.short {
        @apply text-xs text-text-3 block font-light;
      }
    }
  }

  > .current {
    @apply text-right;
    span.amount {
      @apply text-sm lg:text-base font-medium text-[#01071D] block;
    }

    span.short {
      @apply text-xs lg:text-sm text-text-3 block font-light;
    }
  }
}

.inputs {
  @apply space-y-3 lg:space-y-4 w-full mt-12 lg:mt-16;

  > .high,
  .low {
    @apply rounded-xl border border-text-4 px-3 lg:px-3.5 w-full;

    input {
      @apply py-[18px] lg:py-[22px] max-w-[80px] text-xs lg:text-sm font-light text-text-2 text-right focus:outline-none bg-transparent;
    }
  }
}
</style>
