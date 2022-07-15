<template>
  <div class="modal w-full h-screen fixed left-0 top-0 z-[50]">
    <div class="modal-container w-full center h-full">
      <div class="popup w-[320px] lg:w-[400px] overflow-y-hidden">
        <button @click="close" >
          <Icon close/>
        </button>

        <div class="inner" :class="{ icon }">
          <div v-if="icon" class="icon w-full center mb-2 xl:mb-2.5">
            <img :src="`/svg/${icon}.svg`" alt="">
          </div>

          <div v-if="title" class="modal-texts" :class="{ icon }">
            <h5 class="text-primary-header">{{ title }}</h5>

            <p v-if="description" class="text-xs lg:text-sm text-primary-explainer">
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
      @apply px-6 lg:px-7 xl:px-8 pt-6 lg:pt-7 xl:pt-8 pb-5 md:pb-6 lg:pb-7 xl:pb-8 bg-white rounded-3xl lg:rounded-[28px] xl:rounded-[32px];

      > .inner {
        @apply col-center-start mt-6 lg:mt-5 mx-auto;

        &.icon {
          @aaply 
        }

        > .modal-texts {
          @apply text-center space-y-1 lg:space-y-1.5 mb-12;

          &.icon {
            @apply mt-0 space-y-3 xl:space-y-4 mb-0;
          }
        }
      }
    }
  }
}
</style>
