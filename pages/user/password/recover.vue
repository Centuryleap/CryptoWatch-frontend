<template>
  <Modal
    title="Forgot your password?"
    description="Enter the email you signed up with"
  >
    <div class="inputs w-full mt-16 lg:mt-20">
      <InputField type="email" placeholder="Email address" />
    </div>

    <ActionButton class="mt-8 lg:mt-10" to="/user/password/verify-otp"> Continue </ActionButton>

    <div class="hint">
      <Link to="/user/login">Back to login</Link>
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
  @apply mt-3 lg:mt-4 text-xs lg:text-sm font-light text-text-3 mb-6 lg:mb-9;
}
</style>
