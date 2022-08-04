<template>
  <div class="card">
    <div class="icon-info flex items-center">
      <Icon src="btc" class="w-9 lg:w-11" />

      <div>
        <span class="name"> Bitcoin </span>

        <span class="short"> btc </span>
      </div>
    </div>

    <div class="duration-stats end mt-4 lg:mt-6 xl:mt-8">
      <Icon src="graph" class="w-[94px] lg:w-36 xl:w-[150px]" />
    </div>

    <div class="price-info">
      <div class="top between">
        <span class="name"> BTC/USD </span>

        <span class="percentage"> 4.28% </span>
      </div>

      <span>$20,000.67</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.card {
  @apply bg-white first:bg-primary-1 first:text-white text-primary-4  p-4 pt-6 rounded-2xl lg:rounded-[22px] xl:pt-8 xl:pb-5 xl:pl-6 xl:pr-4 shrink-0;

  > .icon-info {
    @apply space-x-1 lg:space-x-2;

    > div {
      @apply lg:space-y-1;

      span.name {
        @apply text-sm lg:text-base block font-light lg:font-medium truncate;
      }

      span.short {
        @apply text-[10px] lg:text-xs text-text-3 block font-light uppercase;
      }
    }
  }

  > .price-info {
    @apply space-y-1 mt-2 lg:mt-4 xl:mt-6;

    > .top {
      span {
        @apply block;
      }

      span.name {
        @apply text-[10px] lg:text-sm block text-text-3 font-light uppercase;
      }

      span.percentage {
        @apply text-[10px] lg:text-sm block font-light text-[#E24949];
      }
    }

    > span {
      @apply text-sm lg:text-base font-light lg:font-medium;
    }
  }
}
</style>
