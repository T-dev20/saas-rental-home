<template>
  <v-container>
    <v-row class="mb-6">
      <v-col cols="12" md="8">
        <v-select
          v-model="selectedMonth"
          :items="months"
          label="Select Month"
          dense
        ></v-select>
      </v-col>
      <v-col cols="12" md="4">
        <v-btn color="primary" block @click="goToToday">Today</v-btn>
      </v-col>
    </v-row>

    <v-sheet elevation="2">
      <v-row>
        <v-col v-for="(day, index) in weekDays" :key="index" class="text-center font-weight-bold">
          {{ day }}
        </v-col>
      </v-row>
      <v-row>
        <v-col
          v-for="(date, index) in calendarDates"
          :key="index"
          class="py-6 text-center"
          :class="{ 'bg-primary text-white': isToday(date), 'text-muted': !isCurrentMonth(date) }"
        >
          <div class="mb-4">{{ date.getDate() }}</div>
          <v-chip v-for="event in eventsByDate(date)" :key="event.id" color="secondary" small>
            {{ event.title }}
          </v-chip>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'CalendarView',
  setup() {
    const today = new Date();
    const selectedDate = ref(new Date());
    const selectedMonth = ref(today.getMonth());

    const months = Array.from({ length: 12 }, (_, i) =>
      new Date(2023, i).toLocaleString('default', { month: 'long' })
    );

    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const calendarDates = computed(() => {
      const start = new Date(selectedDate.value.getFullYear(), selectedMonth.value, 1);
      const end = new Date(selectedDate.value.getFullYear(), selectedMonth.value + 1, 0);
      const daysInMonth = end.getDate();

      const firstDay = start.getDay();
      const dates = [];

      // Fill previous month's days
      for (let i = firstDay; i > 0; i--) {
        const prevDate = new Date(start);
        prevDate.setDate(start.getDate() - i);
        dates.push(prevDate);
      }

      // Fill current month days
      for (let i = 1; i <= daysInMonth; i++) {
        const currentDate = new Date(start);
        currentDate.setDate(i);
        dates.push(currentDate);
      }

      // Fill next month's days
      while (dates.length % 7 !== 0) {
        const nextDate = new Date(end);
        nextDate.setDate(end.getDate() + (dates.length % 7));
        dates.push(nextDate);
      }

      return dates;
    });

    const events = ref([
      { id: 1, title: 'Meeting', date: '2023-06-15' },
      { id: 2, title: 'Workshop', date: '2023-06-18' },
      { id: 3, title: 'Conference', date: '2023-06-22' },
    ]);

    const isToday = (date) => {
      return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      );
    };

    const isCurrentMonth = (date) => {
      return date.getMonth() === selectedMonth.value;
    };

    const eventsByDate = (date) => {
      const dateString = date.toISOString().split('T')[0];
      return events.value.filter((event) => event.date === dateString);
    };

    const goToToday = () => {
      selectedDate.value = new Date();
      selectedMonth.value = today.getMonth();
    };

    return {
      today,
      selectedDate,
      selectedMonth,
      months,
      weekDays,
      calendarDates,
      events,
      isToday,
      isCurrentMonth,
      eventsByDate,
      goToToday,
    };
  },
};
</script>

<style scoped>
.text-muted {
  color: #9e9e9e;
}
.bg-primary {
  background-color: #6200ea !important;
}
.text-white {
  color: #ffffff !important;
}
</style>
