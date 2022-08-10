<template>
  <VueApexCharts
    type="area"
    :height="height"
    :min-width="minWidth"
    :max-width="maxWidth"
    :options="chartOptions"
    :series="series"
  ></VueApexCharts>
</template>

<script>
export default {
  components: {
    VueApexCharts: () => import("vue-apexcharts"),
  },

  props: {
    series: Array,
    chartOptions: Object,
    height: Number,
    minWidth: Number,
    maxWidth: Number,
  },

  data() {
    return {
      
    };
  },
};
</script>

<style></style>
