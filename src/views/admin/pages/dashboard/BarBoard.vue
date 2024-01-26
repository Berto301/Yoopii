<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { LineChart, useLineChart } from "vue-chart-3";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";

Chart.register(...registerables);
export default defineComponent({
  name: "App",
  components: { LineChart },
  setup() {
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Property report",
          backgroundColor: "#3333ff",
          borderColor: "#3333ff",
          data: [40, 39, 10, 40, 39, 80, 40],
        },
        {
          label: "Last year report",
          backgroundColor: "#99e699",
          borderColor: "#99e699",
          data: [20, 10, 40, 30, 20, 10, 40],
        },
      ],
    };
    const dataOptions = {
      responsive: true,
      maintainAspectRatio: false,
    };
    const chartData = computed<ChartData<"line">>(() => data);

    const options = computed<ChartOptions<"line">>(() => dataOptions);

    const { lineChartProps } = useLineChart({
      chartData,
      options,
    });

    return {
      lineChartProps,
    };
  },
});
</script>
<template>
  <div class="w-full bg-white p-8 rounded-lg shadow-lg flex flex-col space-y-6">
    <span class="upppercase text-lg font-semibold text-greyColor"> RECENTLY REPORT</span>
    <LineChart v-bind="lineChartProps" />
  </div>
</template>

