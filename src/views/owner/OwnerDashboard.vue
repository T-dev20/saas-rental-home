<template>
  <DashboardLayout>
    <div class="md:flex md:items-center md:justify-between mb-6">
      <div class="flex-1 min-w-0">
        <h1 class="text-2xl font-bold leading-7 text-neutral-900 sm:text-3xl sm:truncate">Dashboard</h1>
        <p class="mt-1 text-sm text-neutral-500">Welcome back, {{ userName }}. Here's an overview of your properties.</p>
      </div>
      <div class="mt-4 flex md:mt-0 md:ml-4">
        <RouterLink
          to="/dashboard/properties/new"
          class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Add new property
        </RouterLink>
      </div>
    </div>

    <div class="mt-4">
      <div>
        <h2 class="text-lg leading-6 font-medium text-neutral-900">Overview</h2>
        <div class="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <!-- Card -->
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <OfficeBuildingIcon class="h-6 w-6 text-primary-400" aria-hidden="true" />
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-neutral-500 truncate">Properties</dt>
                    <dd>
                      <div class="text-lg font-medium text-neutral-900">{{ properties.length }}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="bg-neutral-50 px-5 py-3">
              <div class="text-sm">
                <RouterLink to="/dashboard/properties" class="font-medium text-primary-700 hover:text-primary-900">
                  View all
                </RouterLink>
              </div>
            </div>
          </div>

          <!-- Card -->
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <ClockIcon class="h-6 w-6 text-accent-500" aria-hidden="true" />
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-neutral-500 truncate">Upcoming Bookings</dt>
                    <dd>
                      <div class="text-lg font-medium text-neutral-900">{{ upcomingBookings.length }}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="bg-neutral-50 px-5 py-3">
              <div class="text-sm">
                <RouterLink to="/dashboard/bookings" class="font-medium text-primary-700 hover:text-primary-900">
                  View all
                </RouterLink>
              </div>
            </div>
          </div>

          <!-- Card -->
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <CurrencyDollarIcon class="h-6 w-6 text-success-500" aria-hidden="true" />
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-neutral-500 truncate">Monthly Revenue</dt>
                    <dd>
                      <div class="text-lg font-medium text-neutral-900">${{ monthlyRevenue.toLocaleString() }}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="bg-neutral-50 px-5 py-3">
              <div class="text-sm">
                <RouterLink to="/dashboard/analytics" class="font-medium text-primary-700 hover:text-primary-900">
                  View details
                </RouterLink>
              </div>
            </div>
          </div>

          <!-- Card -->
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <ChartPieIcon class="h-6 w-6 text-primary-600" aria-hidden="true" />
                </div>
                <div class="ml-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-neutral-500 truncate">Occupancy Rate</dt>
                    <dd>
                      <div class="text-lg font-medium text-neutral-900">{{ occupancyRate }}%</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="bg-neutral-50 px-5 py-3">
              <div class="text-sm">
                <RouterLink to="/dashboard/analytics" class="font-medium text-primary-700 hover:text-primary-900">
                  View details
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Bookings -->
      <div class="mt-8">
        <div class="flex items-center justify-between">
          <h2 class="text-lg leading-6 font-medium text-neutral-900">Recent Bookings</h2>
          <RouterLink
            to="/dashboard/bookings"
            class="text-sm font-medium text-primary-600 hover:text-primary-500"
          >
            View all
          </RouterLink>
        </div>
        <div class="mt-2 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
          <table class="min-w-full divide-y divide-neutral-200">
            <thead class="bg-neutral-50">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider"
                >
                  Guest
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider"
                >
                  Property
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider"
                >
                  Dates
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Action</span>
                </th>
              </tr>
            </thead>
            <tbody v-if="recentBookings.length > 0" class="bg-white divide-y divide-neutral-200">
              <tr v-for="booking in recentBookings" :key="booking.id">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="text-sm font-medium text-neutral-900">{{ booking.guestName }}</div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-neutral-900">{{ booking.propertyName }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-neutral-500">
                    {{ formatDate(booking.checkIn) }} - {{ formatDate(booking.checkOut) }}
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                  ${{ booking.totalAmount.toLocaleString() }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                    :class="{
                      'bg-success-100 text-success-800': booking.status === 'confirmed',
                      'bg-warning-100 text-warning-800': booking.status === 'pending',
                      'bg-error-100 text-error-800': booking.status === 'cancelled'
                    }"
                  >
                    {{ booking.status }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <RouterLink
                    :to="`/dashboard/bookings?id=${booking.id}`"
                    class="text-primary-600 hover:text-primary-900"
                  >
                    View
                  </RouterLink>
                </td>
              </tr>
            </tbody>
            <tbody v-else>
              <tr>
                <td colspan="6" class="px-6 py-10 text-center text-sm text-neutral-500">
                  <p>No bookings found</p>
                  <p class="mt-2">
                    <RouterLink to="/dashboard/properties" class="font-medium text-primary-600 hover:text-primary-500">
                      Set up your properties
                    </RouterLink>
                    to start receiving bookings.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Property Listing -->
      <div class="mt-8">
        <div class="flex items-center justify-between">
          <h2 class="text-lg leading-6 font-medium text-neutral-900">Your Properties</h2>
          <RouterLink
            to="/dashboard/properties/new"
            class="text-sm font-medium text-primary-600 hover:text-primary-500"
          >
            Add new property
          </RouterLink>
        </div>
        <div class="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="property in properties"
            :key="property.id"
            class="bg-white overflow-hidden rounded-lg shadow"
          >
            <div class="relative pb-2/3">
              <img
                :src="property.images[0]"
                :alt="property.name"
                class="absolute h-full w-full object-cover"
              />
              <div class="absolute top-0 right-0 pt-2 pr-2">
                <span
                  class="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium"
                  :class="{
                    'bg-success-100 text-success-800': property.status === 'active',
                    'bg-neutral-100 text-neutral-800': property.status === 'inactive',
                    'bg-warning-100 text-warning-800': property.status === 'pending'
                  }"
                >
                  {{ property.status }}
                </span>
              </div>
            </div>
            <div class="p-4">
              <div class="flex items-baseline justify-between">
                <h3 class="text-lg font-medium text-neutral-900 truncate">{{ property.name }}</h3>
                <div class="flex items-center">
                  <StarIcon class="h-4 w-4 text-accent-400" aria-hidden="true" />
                  <span class="ml-1 text-sm text-neutral-600">{{ property.rating }}</span>
                </div>
              </div>
              <p class="mt-1 text-sm text-neutral-500 truncate">
                {{ property.location.city }}, {{ property.location.state }}
              </p>
              <div class="mt-2 flex items-center justify-between">
                <div class="flex items-center space-x-1 text-sm text-neutral-500">
                  <UsersIcon class="h-4 w-4" />
                  <span>{{ property.capacity.guests }}</span>
                  <span class="mx-1">·</span>
                  <HomeIcon class="h-4 w-4" />
                  <span>{{ property.capacity.bedrooms }}</span>
                  <span class="mx-1">·</span>
                  <span>${{ property.pricing.basePrice }}/night</span>
                </div>
              </div>
              <div class="mt-4 flex justify-between">
                <RouterLink
                  :to="`/dashboard/properties/${property.id}/edit`"
                  class="inline-flex items-center px-3 py-1.5 border border-neutral-300 shadow-sm text-sm font-medium rounded-md text-neutral-700 bg-white hover:bg-neutral-50"
                >
                  Edit
                </RouterLink>
                <RouterLink
                  :to="`/properties/${property.id}`"
                  target="_blank"
                  class="inline-flex items-center px-3 py-1.5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
                >
                  View listing
                </RouterLink>
              </div>
            </div>
          </div>

          <!-- Add new property card -->
          <div
            v-if="properties.length === 0 || properties.length < 3"
            class="bg-white overflow-hidden rounded-lg shadow border-2 border-dashed border-neutral-300"
          >
            <RouterLink
              to="/dashboard/properties/new"
              class="block h-full w-full p-12 text-center flex flex-col items-center justify-center hover:bg-neutral-50"
            >
              <PlusCircleIcon class="h-12 w-12 text-primary-400" />
              <span class="mt-2 block text-sm font-medium text-neutral-900">
                Add new property
              </span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { format } from 'date-fns'
import { RouterLink } from 'vue-router'
import {
  OfficeBuildingIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ChartPieIcon,
  UsersIcon,
  HomeIcon,
  StarIcon,
  PlusCircleIcon
} from '@heroicons/vue/solid'
import DashboardLayout from '../../components/layout/DashboardLayout.vue'
import { useAuthStore } from '../../stores/auth'
import { usePropertyStore } from '../../stores/properties'

const authStore = useAuthStore()
const propertyStore = usePropertyStore()

const loading = ref(true)
const userName = computed(() => authStore.user?.name || 'User')
const properties = computed(() => propertyStore.ownedProperties)
const bookings = computed(() => {
  // Flatten all bookings from all properties
  return propertyStore.bookings
})

const recentBookings = computed(() => {
  return [...bookings.value].sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt)
  }).slice(0, 5)
})

const upcomingBookings = computed(() => {
  const today = new Date()
  return bookings.value.filter(booking => {
    const checkIn = new Date(booking.checkIn)
    return checkIn >= today
  })
})

const monthlyRevenue = computed(() => {
  // Calculate revenue for current month
  const currentMonth = new Date().getMonth()
  const currentYear = new Date().getFullYear()
  
  return bookings.value
    .filter(booking => {
      const bookingDate = new Date(booking.checkIn)
      return bookingDate.getMonth() === currentMonth && 
             bookingDate.getFullYear() === currentYear
    })
    .reduce((total, booking) => total + booking.totalAmount, 0)
})

const occupancyRate = computed(() => {
  // Calculate average occupancy rate
  if (properties.value.length === 0) return 0
  
  const now = new Date()
  const thirtyDaysLater = new Date()
  thirtyDaysLater.setDate(now.getDate() + 30)
  
  // Total available days across all properties
  const totalDays = properties.value.length * 30
  
  // Count booked days
  let bookedDays = 0
  properties.value.forEach(property => {
    property.availability.booked.forEach(booking => {
      const start = new Date(booking.start)
      const end = new Date(booking.end)
      
      // Only count days within our 30-day window
      if (start <= thirtyDaysLater && end >= now) {
        const effectiveStart = start < now ? now : start
        const effectiveEnd = end > thirtyDaysLater ? thirtyDaysLater : end
        
        // Calculate days between these dates
        const days = Math.round((effectiveEnd - effectiveStart) / (1000 * 60 * 60 * 24))
        bookedDays += days
      }
    })
  })
  
  return Math.round((bookedDays / totalDays) * 100)
})

function formatDate(dateString) {
  return format(new Date(dateString), 'MMM d, yyyy')
}

onMounted(async () => {
  await propertyStore.fetchProperties()
  await propertyStore.fetchBookings()
  loading.value = false
})
</script>

<style scoped>
.pb-2\/3 {
  padding-bottom: 66.666667%;
}
</style>