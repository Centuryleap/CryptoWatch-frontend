<template>
  <div class="template between md:grid grid-cols-3" @click="click">
    <div class="left w-2/5 md:w-auto between">
      <div class="coin-info start">
        <Icon src="btc" class="" />

        <div>
          <span class="name"> Bitcoin </span>

          <span class="short"> BTC </span>
        </div>
      </div>

      <div class="prices">
        <span class="price"> $56,000 </span>

        <span class="currency-shorts"> BTC/USD </span>
      </div>
    </div>

    <div class="graph place-self-center">
      <Icon src="graph" class="" />
    </div>

    <div class="right between">
      <div class="stats">
        <span class="percentage"> 4.28% </span>

        <span class="text"> 7d </span>
      </div>

      <button class="toggle hidden md:start" @click="added = !added">
        <Icon :src="added ? 'watchlist-remove' : 'watchlist-add'" class="w-5 lg:w-6" />

        <span :class="added ? 'text-[#D70000]' : 'text-primary-2'">
          {{ added ? 'remove' : 'watchlist' }}
        </span>
      </button>

      <div class="price-seven">
        <span class="amount"> $56,000 </span>

        <span class="seven"> 4.28% </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      added: false
    };
  },
  
  methods: {
    click() {
      this.$router.push("home/coins/bitcoin");
    },
  },
};
</script>

<style lang="postcss" scoped>
.template {
  @apply px-3 md:px-5 xl:px-[35px] py-3.5 lg:py-4 bg-white cursor-pointer;

  > .left {
    > .coin-info {
      @apply space-x-2.5 lg:space-x-5 xl:space-x-6;

      > div {
        span.name {
          @apply text-sm lg:text-base font-light md:font-normal text-text-1 block;
        }

        span.short {
          @apply text-xs text-text-4-pro block font-light;
        }
      }
    }

    > .prices {
      @apply hidden sm:block;
      span.price {
        @apply text-sm lg:text-base font-light text-text-1 block;
      }

      span.currency-shorts {
        @apply text-xs text-text-4-pro block font-light;
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
        @apply text-sm lg:text-base font-light text-[#E24949] block;
      }

      span.text {
        @apply text-xs text-text-4-pro block font-light;
      }
    }

    > .price-seven {
      @apply md:hidden;
      span.amount {
        @apply text-sm lg:text-base font-light text-text-1 block;
      }

      span.seven {
        @apply text-xs text-[#E24949] block font-light text-right;
      }
    }
  }
}
</style>
