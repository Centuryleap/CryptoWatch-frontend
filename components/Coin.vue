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
  },
  
  data() {
    return {
      added: false,

      chart: {
        series: [
          {
            name: "series1",
            data: [
                23385.63635414085,
                23347.694879236282,
                23371.344890013825,
                23293.66621786727,
                23365.62773939191,
                23448.830276568286,
                23478.45318170668,
                23561.825256339675,
                23514.886101809436,
                23353.15526502444,
                23329.23241864078,
                23026.02287402876,
                22860.42098438317,
                23021.363403137442,
                23165.07299862601,
                23154.057166073842,
                23103.059748132782,
                23131.857855052407,
                23146.821787804925,
                22941.33425740183,
                22966.697985477986,
                22840.295982877997,
                22872.47809481704,
                22891.689214319722,
                22925.591058156344,
                22939.92827909115,
                22998.007950207473,
                22918.987264249394,
                22889.943487417593,
                22759.624086553336,
                22666.122824147693,
                22626.14436355951,
                22526.435183639795,
                22569.498122092893,
                22555.159978032265,
                22639.315927631513,
                22670.805467242913,
                22670.754974103194,
                22792.56894034112,
                23101.629653708267,
                23189.72937256446,
                23162.64545857599,
                23244.716623299006,
                23270.178940177517,
                23213.183442976253,
                23136.194708847743,
                23145.397604891536,
                23236.66447917,
                23426.863032781774,
                23041.140476247227,
                23061.426167940153,
                23225.346907374642,
                23042.103136243677,
                23006.724847657093,
                22958.232947473756,
                22834.97170925916,
                22914.175494713192,
                22975.426717494902,
                23152.80401737373,
                23240.700574791303,
                23225.036201942938,
                23289.635614459137,
                23248.370622776587,
                23276.748783798543,
                23203.53378919455,
                23227.182484320372,
                23204.679549688728,
                23186.37353251177,
                23224.30083975727,
                23170.585831566834,
                23205.743133485837,
                23199.620151590272,
                23177.198029948682,
                23197.719672630807,
                23211.868632619335,
                23220.887956958457,
                23209.576812276,
                23212.477809256714,
                23163.585786848744,
                23175.78180257873,
                23209.43804276598,
                23184.24808221292,
                23191.557167588115,
                23199.689947122362,
                22984.57953144855,
                22949.64785813393,
                22935.020076158922,
                23011.76561145652,
                23011.36572437755,
                23010.770904452937,
                22991.978854808985,
                23024.131977473124,
                23025.750361380524,
                22951.155016019173,
                22986.094715647123,
                23006.043975365625,
                23022.118456853925,
                23106.979695904538,
                23166.50831509818,
                23136.147414083767,
                23077.282158421873,
                23114.836129805888,
                23256.09238706329,
                23233.966834586292,
                23168.129613236077,
                23272.417273311374,
                23326.974063756443,
                23258.361516565732,
                23197.603469525384,
                23253.816633042905,
                23246.046274735847,
                23317.089683817758,
                23314.642076928005,
                23324.716784497115,
                23457.93209587343,
                23757.656043541465,
                23816.71269975789,
                24062.67537960739,
                24085.2336073087,
                24081.54843046973,
                24119.459526904466,
                24128.6668381869,
                24185.790367799396,
                24177.68127382232,
                23988.969591535944,
                23947.13668905716,
                23979.964200696733,
                23948.652880092963,
                23966.380191756194,
                24077.6213212528,
                23868.383379107203,
                23815.756930836098,
                23849.152631543566,
                23849.25123921319,
                23772.085884089236,
                23814.061365774804,
                23863.337011140495,
                23920.33130242623,
                23922.088571506163,
                23851.65919673342,
                23881.254305807783,
                23824.1790477423,
                23655.772222011416,
                23414.31326392261,
                23278.797089558007,
                23290.297637406627,
                23194.727907645738,
                23142.98185747555,
                23132.393296889157,
                23124.43665998783,
                23033.520503040574,
                23073.71899930757,
                23107.484165356927,
                23225.483443665544,
                23211.524629817377,
                23167.70136242787,
                23203.680696781623,
                22826.073530150657,
                22877.316516211962,
                22887.17055941663,
                22857.325173268782,
                22885.825565257455,
                22953.898050290587,
                22939.03207343407,
                23014.554292044653,
                23102.833448748,
                23075.173964099402,
                23084.701531320035
            ],
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
