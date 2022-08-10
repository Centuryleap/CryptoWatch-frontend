<template>
  <VueApexCharts
    type="area"
    height="270"
    min-width="800"
    max-width="100%"
    :options="chartOptions"
    :series="series"
  ></VueApexCharts>
</template>

<script>
export default {
  components: {
    VueApexCharts: () => import("vue-apexcharts"),
  },
  data() {
    return {
      series: [
        {
          name: "series1",
          data: [0, 40, 28, 51, 42, 109, 100, 120, 110, 100, 140, 200],
        },
        {
          name: "series2",
          data: [0, 32, 45, 32, 34, 52, 41, 51, 42, 109, 100, 120],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "area",
          toolbar: false,
          foreColor: "#999999",
          offsetX: 0,
        },
        plotOptions: {
          area: {
            colors: ["#f44336", "#2196f3"],
          },
        },

        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "string",
          max: 12,
          categories: [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC",
          ],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
        legend: {
          show: false,
        },

        colors: ["#2FA0FA", "#00D563"],
        stroke: {
          show: true,
          curve: "smooth",
          width: 2,
          lineCap: "round",
        },
        grid: {
          show: true,
          borderColor: "#EBF2FA",
          xaxis: {
            lines: {
              show: false,
            },
          },
        },

        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.2,
            opacityTo: 0.4,
            stops: [0, 100, 100],
          },
        },
      },
    };
  },
};
</script>

<style></style>
