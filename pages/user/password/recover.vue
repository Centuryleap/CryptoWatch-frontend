<template>
  <Modal title="Forgot your password?" description="Enter the email you signed up with">
    <ValidationObserver v-slot="{ valid }" class="w-full">
      <form @submit.prevent="recover(valid)" class="w-full">
        <div class="inputs w-full mt-16 lg:mt-20">
          <InputField type="email" placeholder="Email address" name="Email" v-model="user.email" />
        </div>

        <ActionButton class="mt-8 lg:mt-10" submit :loading="loading"> 
          Continue
        </ActionButton>

        <div class="hint">
          <Link to="/user/login">Back to login</Link>
        </div>
      </form>
    </ValidationObserver>
  </Modal>
</template>

<script>
import InputField from "~/components/FormElements/InputField.vue";
import ActionButton from "~/components/FormElements/ActionButton.vue";
import Modal from "~/components/Modals/Modal.vue";
export default {
  components: { Modal, InputField, ActionButton },

  data() {
    return {
      user: {
        email: "",
      },
      loading: false,
    };
  },

  methods: {
    async recover(valid) {
      if (valid) {
        this.loading = true;
        this.$axios
          .post("auth/reset", {
            email: this.user.email,
          })
          .then((response) => {
            console.log(response);
            //push rensponse.token to next page
            this.$router.push(`/user/password/verify-otp?token=${response.data.token}`);

              // this.toggleLoginStatus();
              // this.$router.push("/user/password/verify-otp");
          })
          .catch((error) => {
            console.log(error.response);
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
  }
};
</script>

<style lang="postcss" scoped>
.hint {
  @apply mt-3 lg:mt-4 text-xs lg:text-sm font-light text-text-3 mb-6 lg:mb-9 text-center;
}
</style>
