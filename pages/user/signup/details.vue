<template>
  <Modal
    title="Create an account"
    description="Create an account to get started started"
  >
    <ValidationObserver v-slot="{ valid }" class="w-full">
      <form @submit.prevent="createUser(valid)">
        <div class="inputs">
          <InputField
            type="email"
            name="Email"
            placeholder="Email address"
            v-model="user.email"
            rules="required|email"
          />
          <InputField
            type="password"
            name="Password"
            placeholder="Password"
            v-model="user.password"
            rules="required|min:6"
          />
          <InputField
            type="password"
            name="Confirm password"
            placeholder="Confirm password"
            v-model="user.confirmPassword"
            rules="required|compare_password:@Password"
          />
        </div>

        <ActionButton submit :loading="loading" class="mt-8 lg:mt-10">
          Continue
        </ActionButton>
      </form>
    </ValidationObserver>

    <div class="hint">
      Already have an account? <Link to="/user/login"> Sign In</Link>
    </div>
  </Modal>
</template>

<script>
import InputField from "~/components/FormElements/InputField.vue";
import ActionButton from "~/components/FormElements/ActionButton.vue";
import Modal from "~/components/Modals/Modal.vue";
// import axios from "axios";
export default {
  components: { Modal, InputField, ActionButton },

  data() {
    return {
      user: {
        email: "",
        password: "",
        confirmPassword: "",
      },
      loading: false,
    };
  },

  methods: {
    async createUser(valid) {
      if (valid) {
        this.loading = true;
        let signup = await this.$axios
          .post("/auth/signup", {
            email: this.user.email,
            password: this.user.password,
            confirmPassword: this.user.confirmPassword,
          })
          .then((response) => {
            this.loading = false;
            this.$router.push("/user/login");
            console.log(response);
          })
          .catch((error) => {
            this.loading = false;
            console.log(error.response);
          });
      } else {
        alert("Please fill in all fields");
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.hint {
  @apply mt-3 lg:mt-4 text-xs lg:text-sm font-light text-text-3;
}

.inputs {
  @apply w-full mt-9 lg:mt-12;
}
form {
  @apply w-full;
}
</style>
