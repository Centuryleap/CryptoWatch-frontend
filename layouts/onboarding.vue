<template>
  <div class="relative">
    <div class="layout lg:start-start">
      <div class="left-container min-w-[36.11%] max-w-[36.11%]">
        <div class="top">
          <Logo headlogo class="ml-9 xl:ml-[42px]" />
        </div>

        <div class="bottom col-center">
          <img
            class="w-[160px] xl:w-auto"
            src="/svg/live-without-barriers.svg"
            alt=""
          />

          <img
            class="w-full -mt-7 xl:-mt-10 z-50"
            src="/images/onboarding-tea-chick.png"
            alt=""
          />
        </div>
      </div>

      <div class="right-container col-center">
        <Logo headlogo primary class="lg:hidden" />

        <div class="texts">
          <h1>{{ page.title }}</h1>

          <h4 v-html-safe="page.hint" class="text-label"></h4>
        </div>

        <section class="w-full h-full col-center-start">
          <nuxt></nuxt>
        </section>
      </div>
    </div>

    <div v-show="modalOpened" class="modal">
      <div class="modal-container w-full center">
        <div class="popup w-[310px] lg:w-[400px]">
          <Icon close />

          <div
            class="inner col-center-start mt-5 lg:mt-[26px] mx-auto mb-11 lg:mb-[60px]"
          >
            <Icon pass />

            <div
              class="modal-texts text-center space-y-1 lg:space-y-1.5 mt-3.5 lg:mt-[18px]"
            >
              <h5 class="text-primary-one">Congratulations</h5>

              <p class="text-xs lg:text-sm text-primary-one">
                Sign up succesfully completed
              </p>
            </div>

            <ActionButton class="mt-9 lg:mt-12" to="/">
              Continue loan application
            </ActionButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ActionButton from "../components/FormElements/ActionButton.vue";
export default {
  data() {
    return {
      page: {
        title: null,
        hint: null,
      },

      modalOpened: false,
    };
  },
  mounted() {
    this.updatePageData();
  },
  watch: {
    $route: "updatePageData",
  },
  methods: {
    updatePageData() {
      const { title, hint } = this.$route.meta;
      this.page.title = title;
      this.page.hint = hint;
    },
  },
  // components: { ActionButton },
};
</script>

<style lang="postcss" scoped>
.layout {
  @apply h-screen overflow-y-hidden;

  > .left-container {
    @apply bg-left-onboard min-h-screen max-h-screen px-4 xl:px-[22px] hidden lg:block pt-9 xl:pt-[42px] bg-onboarding-pattern bg-no-repeat bg-bottom bg-cover;
    /* @apply fixed; */

    > .bottom {
      @apply mt-[66px];
    }
  }
}
.right-container {
  @apply w-full pt-10 lg:pt-[100px] xl:pt-[124px] max-w-[468px] mx-auto h-full overflow-y-scroll;
  @apply pb-10 px-[34px];

  > .texts {
    @apply text-center space-y-3 lg:space-y-0 mt-6 mb-12 lg:mb-14 lg:mt-0;
  }

  &::-webkit-scrollbar {
    @apply hidden;
  }
}

.modal {
  @apply absolute top-0 left-0 right-0 bottom-0 z-50;
  @apply bg-black bg-opacity-[80%];

  > .modal-container {
    @apply mt-44 lg:mt-[200px];
    > .popup {
      @apply px-6 lg:px-7 xl:px-8 pt-6 lg:pt-7 xl:pt-8 bg-white rounded-3xl lg:rounded-[28px] xl:rounded-[32px];
    }
  }
}
</style>