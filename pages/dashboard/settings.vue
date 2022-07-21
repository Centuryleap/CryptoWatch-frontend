<template>
  <div class="max-w-[1020px]">
    <div class="card">
      <h4>Get even faster notification <br class="hidden md:block"> with the mobile app Get the app</h4>

      <button class="">
        Get the app
      </button>
    </div>

    <Box title="Notifications" class="mt-7 lg:mt-10">
      <div class="space-y-2">
        <div class="px-7 lg:px-[35px] py-4 lg:py-5 bg-white flex items-center space-x-6 lg:space-x-10">
          <input type="checkbox" name="checkbox" id="">

          <p class="text-xs lg:text-base font-light text-text-2">
            Receive notifications on email
          </p>
        </div>

        <div class="px-7 lg:px-[35px] py-4 lg:py-5 bg-white flex items-center space-x-6 lg:space-x-10">
          <input type="checkbox" name="checkbox" id="">

          <p class="text-xs lg:text-base font-light text-text-2">
            Receive daily notification on new coin listing
          </p>
        </div>

        <div class="px-7 lg:px-[35px] py-4 lg:py-5 bg-white flex items-center space-x-6 lg:space-x-10">
          <input type="checkbox" name="checkbox" id="">

          <p class="text-xs lg:text-base font-light text-text-2">
            Receive notification when watchlisted coin reaches all time high
          </p>
        </div>
      </div>
    </Box>

    <Box title="Security" class="mt-10 lg:mt-16">
      <div class="space-y-2">
        <div class="px-7 lg:px-[35px] py-4 lg:py-5 bg-white flex items-center justify-between" @click="toggleModal">
          <div class="left flex items-center space-x-6 lg:space-x-10">
            <Icon src="lock" class="lock w-6" />
  
            <p class="text-xs lg:text-base font-light text-text-2">
              Change password
            </p>
          </div>

          <Icon src="chevron-right" class="chevron-right w-6" />
        </div>

        <div class="px-7 lg:px-[35px] py-4 lg:py-5 bg-white flex items-center justify-between">
          <div class="left flex items-center space-x-6 lg:space-x-10">
            <Icon src="currency" class="lock w-6" />
  
            <p class="text-xs lg:text-base font-light text-text-2">
              Preferred currency - (USD)
            </p>
          </div>

          <Icon src="chevron-right" class="chevron-right w-6" />
        </div>
      </div>
    </Box>

    <Modal title="Change password" v-if="modalOpened">
      <div class="inputs space-y-4 lg:space-y-5 mt-10 lg:mt-14 w-full">
        <InputField type="password" placeholder="Old password" />
        <InputField type="password" placeholder="New password" />
        <InputField type="password" placeholder="Confirm password" />
      </div>

      <ActionButton class="mt-8 lg:mt-10 mb-2 lg:mb-4">
        Confirm
      </ActionButton>
    </Modal>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: "DashboardSettings",
  title: "Settings",
  layout: "dashboard",

  computed: {
    ...mapState(["modalOpened"])
  },

  methods: {
    ...mapMutations(["toggleModal"])
  }
};
</script>

<style lang="postcss" scoped>
.card {
  @apply rounded-3xl bg-[#010923] px-6 md:px-7 lg:px-8 pt-7 md:pt-8 lg:pt-10 pb-6 lg:pb-8 font-medium text-lg xl:text-2xl xl:leading-[36px] text-white;

  button {
    @apply bg-primary-3 rounded-full text-xs lg:text-sm font-medium text-white lg:leading-[24px] py-2.5 lg:py-[11px] px-4 lg:px-[18.5px] mt-8 lg:mt-10;
  }
}


input {
  @apply min-w-[20px]
}
</style>
