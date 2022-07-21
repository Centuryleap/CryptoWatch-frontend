<template>
  <div>
    <div class="alerts">
      <PriceAlertTemplate @click="toggleModal" />
      <PriceAlertTemplate />
      <PriceAlertTemplate />
      <PriceAlertTemplate />
      <PriceAlertTemplate />
      <PriceAlertTemplate />
      <PriceAlertTemplate />
      <PriceAlertTemplate />
      <PriceAlertTemplate />
      <PriceAlertTemplate />
      <PriceAlertTemplate />
      <PriceAlertTemplate />
      <PriceAlertTemplate />
      <PriceAlertTemplate />
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
            <span class="name"> Bitcoin </span>

            <span class="short"> BTC </span>
          </div>
        </div>

        <div class="current">
          <span class="short"> BTC/USD </span>

          <span class="amount"> $20,000.67 </span>
        </div>
      </div>

      <div class="inputs">
        <div class="high between">
          <div class="label flex items-center">
            <Icon src="up" class="w-4" />

            <span class="text-[#008000] text-xs lg:text-sm font-light">High</span>
          </div>

          <input type="text" v-model="currentHigh">
        </div>

        <div class="low between">
          <div class="label flex items-center">
            <Icon src="down" class="w-4" />

            <span class="text-[#E24949] text-xs lg:text-sm font-light">Low</span>
          </div>

          <input type="text" v-model="currentLow">
        </div>
      </div>

      <ActionButton class="mt-10 lg:mt-14 mb-4 lg:mb-7">
        Set alert
      </ActionButton>
    </Modal>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "PriceAlert",
  title: "Price alert",
  layout: "dashboard",

  data() {
    return {
      currentHigh: "$20,000.67",
      currentLow: "$20,000.67",
    };
  },

  computed: {
    ...mapState(["modalOpened"]),
  },

  methods: {
    ...mapMutations(["toggleModal"]),
  },
};
</script>

<style lang="postcss" scoped>
.alerts {
  @apply space-y-2.5;
}

.selected-coin-info {
  @apply mt-8 lg:mt-10 ;
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

  > .high, .low {
    @apply rounded-xl border border-text-4 px-3 lg:px-3.5 w-full;

    input {
      @apply py-[18px] lg:py-[22px] max-w-[80px] text-xs lg:text-sm font-light text-text-2 text-right focus:outline-none;
    }
  }
}
</style>
