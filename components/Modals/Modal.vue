<template>
  <div class="modal w-full h-screen fixed left-0 top-0 z-[50]">
    <div class="modal-container w-full center h-full">
      <div class="popup w-[320px] lg:w-[400px] overflow-y-hidden">
        <div class="end">
          <button @click="close" >
            <Icon src="close"/>
          </button>
        </div>

        <div class="inner">
          <div v-if="title" class="modal-texts">
            <h5 class="text-primary-header">{{ title }}</h5>

            <p v-if="description" class="text-xs lg:text-sm text-text-3">
              {{ description }}
            </p>
          </div>

          <slot>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations} from 'vuex';
export default {
  props: {
    title: {
      type: String,
      // default: "Pay loan",
    },
    description: {
      type: String,
      // default: "Select amount to pay",
    },

    icon: String,
  },

  methods: {
    ...mapMutations(["toggleModal", "setPosition"]),
    close() {
      this.toggleModal();
      this.setPosition(0);
    },
  },
};
</script>

<style lang="postcss" scoped>
.modal {
  background: rgba(0, 0, 0, 0.72);

  > .modal-container {
    /* @apply mt-44; */
    > .popup {
      @apply px-7 lg:px-8 pt-7 lg:pt-8 pb-5 md:pb-6 xl:pb-7 bg-white rounded-3xl;

      > .inner {
        @apply col-center-start mt-5 lg:mt-4 mx-auto px-4 lg:px-5 xl:px-[26px];

        &.icon {
          @aaply 
        }

        > .modal-texts {
          @apply text-center space-y-1.5 lg:space-y-2;

          h5 {
            @apply lg:text-2xl text-primary-1
          }
        }
      }
    }
  }
}
</style>
