<template>
  <Modal
    title="Sign in to your account"
    description="Enter you details to sign in to your account "
    class="modal"
  >
    <ValidationObserver v-slot="{ valid }" class="w-full pb-4 lg:pb-5">
      <form @submit.prevent="login(valid)">
        <div class="inputs w-full mt-9 lg:mt-12 space-y-4 lg:space-y-5">
          <InputField
            type="email"
            name="Email"
            placeholder="Email address"
            rules="required|email"
            v-model="user.email"
          />
          <InputField
            type="password"
            name="Password"
            placeholder="Password"
            rules="required|min:6"
            v-model="user.password"
          />
        </div>

        <div class="w-full between mb-3 lg:mb-3.5 text-xs mt-12 lg:mt-16">
          <div class="remember start space-x-1">
            <input type="checkbox" name="remember me" id="checkbox" />

            <div class="remember-me text-primary-3 font-light">Remember me</div>
          </div>

          <span class="block">
            <Link to="/user/password/recover"> Forgot password?</Link>
          </span>
        </div>

        <ActionButton submit :loading="loading"> Continue </ActionButton>

        <div class="hint">
          You don't have an account?
          <Link to="/user/signup/details"> Create one</Link>
        </div>
      </form>
    </ValidationObserver>
  </Modal>
</template>

<script>
// import axios from "axios";
import InputField from "~/components/FormElements/InputField.vue";
import ActionButton from "~/components/FormElements/ActionButton.vue";
import Modal from "~/components/Modals/Modal.vue";
import Cookie from "js-cookie";
import { mapMutations } from "vuex";

export default {
  components: { Modal, InputField, ActionButton },

  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      loading: false,
    };
  },

  methods: {
    ...mapMutations({
      setEmail: "user/setEmail",
      toggleLoginStatus: "user/toggleLoginStatus",
    }),

    async login(valid) {
      var checkbox = document.getElementById("checkbox");
      if (valid) {
        this.loading = true;
        this.$axios
          .post("auth/login", {
            email: this.user.email,
            password: this.user.password,
          })
          .then((response) => {
            if (checkbox.checked) {
              console.log(response);
              this.setEmail(this.user.email);
              Cookie.set("Cryptowatch", response.data.token);
              this.toggleLoginStatus();
              this.$router.push("/dashboard");
            }
          })
          .catch((error) => {
            console.log(error.response);
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.hint {
  @apply mt-3 lg:mt-4 text-xs lg:text-sm font-light text-text-3 text-center;
}

.modal .modal-container .popup {
  @apply pb-5;
}
</style>
