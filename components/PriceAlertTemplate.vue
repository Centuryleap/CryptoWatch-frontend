<template>
  <div class="template between" @click="click">
    <div class="left w-1/2 md:w-3/5 between lg:w-1/2">
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

      <div class="graph">
        <Icon src="graph" class="" />
      </div>
    </div>

    <div class="right between w-1/2 sm:w-2/5 md:w-[30%] lg:w-2/5">
      <div class="high-low">
        <span class="block">
          <span class="inline-flex items-center space-x-0.5">
            <Icon src="up" class="" />

            <span class="value"> $56285.89 </span>
          </span>
        </span>

        <span class="block">
          <span class="inline-flex items-center space-x-0.5">
            <Icon src="down" class="" />

            <span class="value"> $56285.89 </span>
          </span>
        </span>
      </div>

      <div class="high">
        <span class="amount"> $60,000 </span>

        <span class="text"> High </span>
      </div>

      <div class="low">
        <span class="amount"> $50,000 </span>

        <span class="text"> Low </span>
      </div>

      <label class="switch">
        <input type="checkbox" checked />
        <span class="slider round"></span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    click() {
      this.$emit("click");
    }
  }
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
      @apply hidden md:block;
      span.price {
        @apply text-sm lg:text-base font-light text-text-1 block;
      }

      span.currency-shorts {
        @apply text-xs text-text-4-pro block font-light;
      }
    }

    > .graph {
      @apply hidden sm:block w-[100px];
    }
  }

  > .right {
    > .high-low {
      @apply lg:hidden;

      > span {
        @apply text-[10px] text-text-2 font-light;
      }
    }

    > .high,
    .low {
      @apply hidden md:block;
      span.amount {
        @apply text-sm lg:text-base font-light text-text-1 block;
      }

      span.text {
        @apply text-xs text-text-4-pro block font-light;
      }
    }
  }
}

.switch {
  position: relative;
  display: inline-block;
  @apply w-11 h-6;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  @apply w-5 h-5;
  left: 2px;
  top: 2px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  box-shadow: 0px 1.2px 4.8px rgba(0, 0, 0, 0.5);
}

input:checked + .slider {
  background-color: #0039e5;
}

input:focus + .slider {
  box-shadow: 0 0 1px #0039e5;
}

input:checked + .slider:before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 14.4px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
