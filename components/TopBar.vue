<template>
  <div class="topbar py-5 lg:px-0 lg:py-7 xl:py-[30px] bg-[#fafafa]">
    <div class="topbar-container between">
      <div class="left-container">
        <Icon src="logo" class="logo md:hidden w-10" />

        <div
          v-if="this.$route.path !== ('/dashboard/home' || '')"
          class="current-route"
        >
          {{ this.$route.meta.title }}
        </div>

        <div
          class="search-feild bg-white hidden md:flex"
          v-if="this.$route.path === '/dashboard/home'"
        >
          <input type="search" name="search" placeholder="Search" />

          <Icon src="search" class="search-icon" />
        </div>
      </div>

      <div
        class="right-container space-x-2 lg:space-x-3 xl:space-x-3 start flex"
      >
        <ActionButton to="/user/login" rounded v-if="!loggedIn"> Sign In </ActionButton>

        <div v-else class="space-x-2 lg:space-x-3 xl:space-x-3 start flex">
          <div
            class="bg-white min-w-[44px] h-11 center rounded-[20px] md:rounded-xl"
          >
            <Icon src="notification" />
          </div>

          <div
            class="avatar-info bg-white p-1.5 rounded-xl md:flex md:space-x-2.5 items-center"
          >
            <Icon src="avatar" />

            <span class="text-primary-2 text-sm hidden md:block font-light">
              {{ email }}
            </span>

            <Icon src="arrow-down" class="hidden md:block" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cookie from "js-cookie";

export default {
  computed: {
    loggedIn() {
      if (Cookie.get("Cryptowatch") === undefined) {
        return false;
      } else {
        return true;
      }
    },

    email() {
      const email = Cookie.get("Email");
      if (this.loggedIn && email !== undefined) {
        return email;
      } else {
        return null;
      };
    },

    currentRoute() {
      return this.$route.path.split("/");
    },

    currentMeta() {
      return this.$route.meta;
    },
  },

  mounted() {
    console.log(Cookie.get("Cryptowatch"));
  },
};
</script>

<style lang="postcss" scoped>
.current-route {
  @apply text-2xl text-[#01071D] hidden md:block;
}

.search-feild {
  @apply items-center pr-4 rounded-2xl w-full focus:outline-none md:w-[300px] xl:min-w-[410px];

  input {
    @apply w-full py-2.5 px-4 text-sm placeholder:text-text-3 leading-[24px] rounded-2xl font-light;
  }
}
</style>
