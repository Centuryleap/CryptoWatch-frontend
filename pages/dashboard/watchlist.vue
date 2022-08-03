<template>
  <div>
    <div class="watching">
      <WatchCard />
      <WatchCard />
      <WatchCard />
      <WatchCard />
      <WatchCard />
      <WatchCard />
      <WatchCard />
      <WatchCard />
      <WatchCard />

      <div class="add">
        <div class="mx-auto w-fit col-center">
          <div class="center">
            <Icon src="add" class="w-[18px] xl:w-6" />
          </div>

          <span class=""> Add to watchlist </span>
        </div>
      </div>
    </div>

    <Modal
      title="Add coin to watchlist"
      description="Select currencies to add to your watchlist"
      pb="pb-0"
    >
      <div class="search-feild bg-white hidden md:flex">
        <input type="search" name="search" placeholder="Search" />

        <Icon src="search" class="search-icon w-5" />
      </div>

      <div class="list">
        <AddCoinElement />
        <AddCoinElement />
        <AddCoinElement />
        <AddCoinElement />
        <AddCoinElement />
        <AddCoinElement />
        <AddCoinElement />
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  name: "Watchlist",
  title: "Watchlist",
  layout: "dashboard",
};
</script>

<style lang="postcss" scoped>
.watching {
  @apply grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3.5 md:gap-4 lg:gap-3.5 xl:gap-6;

  > .add {
    @apply h-full w-full bg-[#F0F4FE] rounded-2xl lg:rounded-[22px] py-12 xl:pt-[92px] xl:pb-16 cursor-pointer;
    > div > div {
      @apply bg-[#ACBEFB] w-[50px] xl:w-16 h-[50px] xl:h-16 rounded-full;
    }

    span {
      @apply mt-4 xl:mt-5 font-light text-xs text-primary-2 xl:text-base;
    }
  }
}

.search-feild {
  @apply items-center pr-4 rounded-2xl w-full focus:outline-none md:w-full mt-7 lg:mt-8;

  input {
    @apply w-full py-3 lg:py-4 px-4 text-sm placeholder:text-text-3 leading-[24px] rounded-2xl font-light;
  }
}

.list {
  @apply space-y-3 lg:space-y-4 mt-4 w-full h-full max-h-[342px] lg:max-h-[424px] overflow-y-scroll;
}
</style>
