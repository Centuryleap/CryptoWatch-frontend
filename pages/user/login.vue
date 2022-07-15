<template>
  <Modal
    title="Sign in to your account"
    description="Enter you details to sign in to your account "
  >
    <div class="inputs w-full mt-9 lg:mt-12 space-y-4 lg:space-y-5">
      <InputField type="email" placeholder="Email address" />
      <InputField type="password" placeholder="Password" />
    </div>

    <div class="w-full between mb-3 lg:mb-3.5 text-xs mt-12 lg:mt-16">
      <div class="remember-me text-primary-3 font-light">Remember me</div>

      <span class="block">
        <Link to="/user/login"> Forgot your pin?</Link>
      </span>
    </div>

    <ActionButton> Continue </ActionButton>

    <div class="hint">
      You don't have an account? <Link to="/user/signup"> Create one</Link>
    </div>
  </Modal>
</template>

<script>
import InputField from "~/components/FormElements/InputField.vue";
import ActionButton from "~/components/FormElements/ActionButton.vue";
import Modal from "~/components/Modals/Modal.vue";
export default {
  components: { Modal, InputField, ActionButton },
};
</script>

<style lang="postcss" scoped>
.hint {
  @apply mt-3 lg:mt-4 text-xs lg:text-sm font-light text-text-3;
}
</style>
