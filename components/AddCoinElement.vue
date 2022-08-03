<template>
  <div class="ace between">
    <div class="left">
      <Icon src="litecoin" class="w-8 lg:w-10" />

      <div class="coin-deats">
        <span class="name">
          Litecoin
        </span>

        <span class="short">
          LTC
        </span>
      </div>
    </div>
    

    <div class="right">
      <label class="switch">
        <input type="checkbox" checked />
        <span class="slider round"></span>
      </label>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
.ace {
  @apply bg-white py-3 lg:py-4 pl-5 pr-7 lg:pl-6 lg:pr-9 w-full;

  > .left {
    @apply space-x-5 lg:space-x-6 flex items-center;  

    > div {
      span.name {
        @apply text-sm lg:text-base text-text-1 block;
      }

      span.short {
        @apply text-[10px] lg:text-xs text-text-4-pro block;
      }
    }
  }
}

.switch {
  position: relative;
  display: inline-block;
  @apply w-11 h-6;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  @apply w-5 h-5;
  left: 2px;
  top: 2px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  box-shadow: 0px 1.2px 4.8px rgba(0, 0, 0, 0.5);
}

input:checked + .slider {
  background-color: #0039e5;
}

input:focus + .slider {
  box-shadow: 0 0 1px #0039e5;
}

input:checked + .slider:before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 14.4px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>