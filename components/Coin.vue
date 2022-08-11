<template>
  <div class="template between md:grid grid-cols-3" @click="click">
    <div class="left w-1/2 md:w-auto between">
      <div class="coin-info start">
        <!-- <Icon src="btc" class="" /> -->
        <img :src="src" alt="">

        <div>
          <span class="name"> {{ name }} </span>

          <span class="short"> {{ short }} </span>
        </div>
      </div>

      <div class="prices">
        <span class="price"> ${{ price }} </span>

        <span class="currency-shorts"> {{ short }}/USD </span>
      </div>
    </div>

    <div class="graph place-self-center">
      <client-only>
        <Graph :series="chart.series" :chartOptions="chart.chartOptions" :minWidth="54" :maxWidth="84" :height="33" />
      </client-only>
    </div>

    <div class="right between">
      <div class="stats">
        <span class="percentage" :class=" sevenDaysPercentage >= 0 ? 'text-[#008000]' : 'text-[#E24949]'"> {{ sevenDaysPercentage.toFixed(2) }}% </span>

        <span class="text"> 7d </span>
      </div>

      <button class="toggle hidden md:start" @click="added = !added">
        <Icon :src="added ? 'watchlist-remove' : 'watchlist-add'" class="w-5 lg:w-6" />

        <span :class="added ? 'text-[#D70000]' : 'text-primary-2'">
          {{ added ? 'remove' : 'watchlist' }}
        </span>
      </button>

      <div class="price-seven">
        <span class="amount"> ${{ price }} </span>

        <span class="seven" :class="sevenDaysPercentage >= 0 ? 'text-[#008000]' : 'text-[#E24949]'"> {{ sevenDaysPercentage.toFixed(2) }}% </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Coin",
  props: {
    src: {
      type: String,
    },

    name: String,
    short: String,
    amount: Number,
    sevenDaysPercentage: {
      type: Number,
      default: 10,
    },
    route: {
      type: String,
      default: "/",
    },
    seriesData: {
      type: Array,
      default: () => [],
    },
  },
  
  data() {
    return {
      added: false,

      chart: {
        series: [
          {
            name: "series1",
            data: this.seriesData,
          },
        ],
        chartOptions: {
          chart: {
            type: "area",
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
          legend: {
            show: false,
          },

          plotOptions: {
          area: {
            dataLabels: {
                  show: false
                }
          },
        },

          colors: [ this.sevenDaysPercentage >= 0 ? '#008000' : '#E24949'],
          stroke: {
            show: true,
            curve: "smooth",
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

  computed: {
    price() {
      var parts = this.amount.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    },
  },
  
  methods: {
    click() {
      this.$router.push(`home/coins/${this.route}`);
    },
  },
};
</script>

<style lang="postcss" scoped>
.apexcharts-tooltip {
display: none;
}
.template {
  @apply px-3 md:px-5 xl:px-[35px] py-3.5 lg:py-4 bg-white cursor-pointer hover:bg-[#F0F4FE] duration-300;

  > .left {
    > .coin-info {
      @apply space-x-2.5 lg:space-x-5 xl:space-x-6;
      img {
        min-width: 40px;
        min-height: 40px;
      }

      > div {
        span.name {
          @apply text-sm lg:text-base font-light md:font-normal text-text-1 block truncate w-[100px] sm:w-[150px] md:w-[130px] lg:w-[140px] xl:w-auto;
        }

        span.short {
          @apply text-xs text-text-4-pro block font-light uppercase;
        }
      }
    }

    > .prices {
      @apply hidden sm:block ;
      span.price {
        @apply text-sm lg:text-base font-light text-text-1 block w-[70px] truncate xl:w-[100px];
      }

      span.currency-shorts {
        @apply text-xs text-text-4-pro block font-light uppercase;
      }
    }
  }

  > .graph {
    @apply w-14 md:w-16 lg:w-[84px];
  }

  > .right {
    > .toggle {
      @apply text-sm lg:text-base space-x-2 md:w-[92px] lg:w-[97px];
    }

    > .stats {
      @apply hidden md:block;
      span.percentage {
        @apply text-sm lg:text-base font-light block;
      }

      span.text {
        @apply text-xs text-text-4-pro block font-light;
      }
    }

    > .price-seven {
      @apply md:hidden text-right;
      span.amount {
        @apply text-sm lg:text-base font-light text-text-1 block w-[65px] truncate;
      }

      span.seven {
        @apply text-xs  block font-light text-right;
      }
    }
  }
}
</style>
