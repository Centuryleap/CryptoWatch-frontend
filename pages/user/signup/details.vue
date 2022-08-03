<template>
  <Modal
    title="Create an account"
    description="Create an account to get started started"
  >
    <form @submit.prevent="createUser">
      <div class="inputs">
        <InputField
          type="email"
          placeholder="Email address"
          v-model="user.email"
        />
        <InputField
          type="password"
          placeholder="Password"
          v-model="user.password"
        />
        <InputField
          type="password"
          placeholder="Confirm password"
          v-model="user.confirmPassword"
        />
      </div>

      <ActionButton submit class="mt-8 lg:mt-10"> Continue </ActionButton>
    </form>

    <div class="hint">
      Already have an account? <Link to="/user/login"> Sign In</Link>
    </div>
  </Modal>
</template>

<script>
import InputField from "~/components/FormElements/InputField.vue";
import ActionButton from "~/components/FormElements/ActionButton.vue";
import Modal from "~/components/Modals/Modal.vue";
import axios from "axios";
import { Result } from "postcss";
export default {
  components: { Modal, InputField, ActionButton },

  data() {
    return {
      user: {
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },

  methods: {
    async createUser() {
      let signup = await axios.post(
        "https://cryptowatch-server.herokuapp.com/auth/signup",
        {
          email: this.user.email,
          password: this.user.password,
          confirmpassword: this.user.confirmPassword,
        }
      );

      if (signup.status === 201){
        alert("Account created successfully");
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
  @apply w-full mt-9 lg:mt-12 space-y-4 lg:space-y-5;
}
form {
  @apply w-full;
}
</style>
