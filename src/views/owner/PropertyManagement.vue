<template>
  <DashboardLayout>
    <div class="md:flex md:items-center md:justify-between">
      <div class="flex-1 min-w-0">
        <h1 class="text-2xl font-bold leading-7 text-neutral-900 sm:text-3xl sm:truncate">Properties</h1>
        <p class="mt-1 text-sm text-neutral-500">Manage all your properties from one place</p>
      </div>
      <div class="mt-4 flex md:mt-0 md:ml-4">
        <RouterLink
          to="/dashboard/properties/new"
          class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          <PlusIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Add property
        </RouterLink>
      </div>
    </div>

    <!-- Filters -->
    <div class="mt-6 bg-white shadow px-4 py-5 sm:rounded-lg sm:px-6">
      <div class="flex flex-wrap gap-4">
        <div class="w-full sm:w-64">
          <label for="search" class="block text-sm font-medium text-neutral-700">Search</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon class="h-5 w-5 text-neutral-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              name="search"
              id="search"
              v-model="filters.search"
              class="focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 sm:text-sm border-neutral-300 rounded-md"
              placeholder="Search properties..."
            />
          </div>
        </div>

        <div class="w-full sm:w-44">
          <label for="type" class="block text-sm font-medium text-neutral-700">Property Type</label>
          <select
            id="type"
            name="type"
            v-model="filters.type"
            class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-neutral-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
          >
            <option value="">All Types</option>
            <option value="Villa">Villa</option>
            <option value="Apartment">Apartment</option>
            <option value="Cabin">Cabin</option>
            <option value="House">House</option>
          </select>
        </div>

        <div class="w-full sm:w-44">
          <label for="status" class="block text-sm font-medium text-neutral-700">Status</label>
          <select
            id="status"
            name="status"
            v-model="filters.status"
            class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-neutral-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
          >
            <option value="">All Statuses</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
          </select>
        </div>

        <div class="w-full sm:w-44">
          <label for="sortBy" class="block text-sm font-medium text-neutral-700">Sort By</label>
          <select
            id="sortBy"
            name="sortBy"
            v-model="filters.sortBy"
            class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-neutral-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
          >
            <option value="name">Name</option>
            <option value="rating">Rating</option>
            <option value="price">Price</option>
            <option value="created">Newest</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Property list -->
    <div class="mt-8">
      <div v-if="loading" class="flex justify-center items-center py-12">
        <svg
          class="animate-spin -ml-1 mr-3 h-8 w-8 text-primary-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <span class="text-neutral-600">Loading properties...</span>
      </div>

      <div v-else-if="filteredProperties.length === 0" class="text-center py-12 bg-white shadow rounded-lg">
        <OfficeBuildingIcon class="mx-auto h-12 w-12 text-neutral-400" />
        <h3 class="mt-2 text-sm font-medium text-neutral-900">No properties found</h3>
        <p class="mt-1 text-sm text-neutral-500">Get started by creating a new property.</p>
        <div class="mt-6">
          <RouterLink
            to="/dashboard/properties/new"
            class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
          >
            <PlusIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            New Property
          </RouterLink>
        </div>
      </div>

      <div v-else class="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        <div
          v-for="property in filteredProperties"
          :key="property.id"
          class="bg-white overflow-hidden shadow rounded-lg"
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
          <div class="p-5">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-lg font-medium text-neutral-900 truncate">{{ property.name }}</h3>
                <p class="mt-1 text-sm text-neutral-500">
                  {{ property.location.city }}, {{ property.location.state }}
                </p>
                <div class="mt-1 flex items-center">
                  <span class="flex items-center">
                    <StarIcon v-for="i in Math.floor(property.rating)" :key="i" class="h-4 w-4 text-accent-400" />
                    <StarIcon
                      v-if="property.rating % 1 > 0"
                      class="h-4 w-4 text-accent-400"
                      style="clip-path: inset(0 50% 0 0);"
                    />
                    <span class="ml-1 text-sm text-neutral-500">{{ property.rating }} ({{ property.reviewCount }})</span>
                  </span>
                </div>
              </div>
              <div class="text-right">
                <p class="text-lg font-medium text-neutral-900">${{ property.pricing.basePrice }}</p>
                <p class="text-sm text-neutral-500">per night</p>
              </div>
            </div>

            <div class="mt-3 flex flex-wrap gap-1">
              <span
                v-for="(amenity, index) in property.amenities.slice(0, 3)"
                :key="index"
                class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-neutral-100 text-neutral-800"
              >
                {{ amenity }}
              </span>
              <span
                v-if="property.amenities.length > 3"
                class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-neutral-100 text-neutral-800"
              >
                +{{ property.amenities.length - 3 }} more
              </span>
            </div>

            <div class="mt-4 flex flex-col sm:flex-row gap-2">
              <RouterLink
                :to="`/dashboard/properties/${property.id}/edit`"
                class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Edit
              </RouterLink>
              <RouterLink
                :to="`/properties/${property.id}`"
                target="_blank"
                class="inline-flex items-center justify-center px-4 py-2 border border-neutral-300 text-sm font-medium rounded-md shadow-sm text-neutral-700 bg-white hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                View listing
              </RouterLink>
              <button
                class="inline-flex items-center justify-center px-4 py-2 border border-neutral-300 text-sm font-medium rounded-md shadow-sm text-neutral-700 bg-white hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                @click="togglePropertyStatus(property)"
              >
                {{ property.status === 'active' ? 'Deactivate' : 'Activate' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { OfficeBuildingIcon, PlusIcon, SearchIcon, StarIcon } from '@heroicons/vue/solid'
import DashboardLayout from '../../components/layout/DashboardLayout.vue'
import { usePropertyStore } from '../../stores/properties'

const propertyStore = usePropertyStore()
const loading = ref(true)

const filters = ref({
  search: '',
  type: '',
  status: '',
  sortBy: 'name'
})

const filteredProperties = computed(() => {
  let result = [...propertyStore.ownedProperties]
  
  // Apply search filter
  if (filters.value.search) {
    const searchTerm = filters.value.search.toLowerCase()
    result = result.filter(property => 
      property.name.toLowerCase().includes(searchTerm) ||
      property.location.city.toLowerCase().includes(searchTerm) ||
      property.location.state.toLowerCase().includes(searchTerm) ||
      property.description.toLowerCase().includes(searchTerm)
    )
  }
  
  // Apply type filter
  if (filters.value.type) {
    result = result.filter(property => property.type === filters.value.type)
  }
  
  // Apply status filter
  if (filters.value.status) {
    result = result.filter(property => property.status === filters.value.status)
  }
  
  // Apply sorting
  result.sort((a, b) => {
    switch (filters.value.sortBy) {
      case 'name':
        return a.name.localeCompare(b.name)
      case 'rating':
        return b.rating - a.rating
      case 'price':
        return a.pricing.basePrice - b.pricing.basePrice
      case 'created':
        return new Date(b.createdAt) - new Date(a.createdAt)
      default:
        return 0
    }
  })
  
  return result
})

async function togglePropertyStatus(property) {
  const newStatus = property.status === 'active' ? 'inactive' : 'active'
  await propertyStore.updateProperty(property.id, { status: newStatus })
}

onMounted(async () => {
  await propertyStore.fetchProperties()
  loading.value = false
})
</script>

<style scoped>
.pb-2\/3 {
  padding-bottom: 66.666667%;
}
</style>