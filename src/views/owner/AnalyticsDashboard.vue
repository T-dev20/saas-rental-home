<template>
  <v-container>
    <v-card>
      <v-card-title>
        Analytics Dashboard
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <v-card outlined>
              <v-card-title>Website Traffic</v-card-title>
              <v-card-text>
                <v-chart type="line" :options="trafficChartOptions" />
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="6">
            <v-card outlined>
              <v-card-title>Conversion Rates</v-card-title>
              <v-card-text>
                <v-chart type="pie" :options="conversionChartOptions" />
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <v-card outlined>
              <v-card-title>Top Performing Pages</v-card-title>
              <v-data-table :items="topPages" :headers="pageHeaders" />
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card outlined>
              <v-card-title>User Demographics</v-card-title>
              <v-chart type="bar" :options="demographicsChartOptions" />
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

const trafficChartOptions = ref({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Visitors',
      data: [100, 200, 300, 400, 500],
      borderColor: 'blue',
      fill: false,
    },
  ],
});

const conversionChartOptions = ref({
  labels: ['Direct', 'Referral', 'Organic'],
  datasets: [
    {
      data: [40, 30, 30],
      backgroundColor: ['red', 'green', 'blue'],
    },
  ],
});

const demographicsChartOptions = ref({
  labels: ['18-24', '25-34', '35-44'],
  datasets: [
    {
      label: 'Age Groups',
      data: [50, 75, 25],
      backgroundColor: 'orange',
    },
  ],
});

const topPages = ref([
  { page: 'Home', views: 5000 },
  { page: 'About', views: 3000 },
  { page: 'Contact', views: 1500 },
]);

const pageHeaders = ref([
  { text: 'Page', value: 'page' },
  { text: 'Views', value: 'views' },
]);
</script>
