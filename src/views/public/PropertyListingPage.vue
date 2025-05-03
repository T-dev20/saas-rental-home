<template>
  <PublicLayout :force-opaque-header="true">
    <div class="bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 class="text-3xl font-bold text-neutral-900 mb-8">Find your perfect stay</h1>

        <!-- Filters -->
        <div class="bg-white shadow p-6 rounded-lg mb-8">
          <div class="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div>
              <label for="location" class="block text-sm font-medium text-neutral-700">Location</label>
              <div class="mt-1">
                <input
                  type="text"
                  name="location"
                  id="location"
                  v-model="filters.location"
                  class="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-neutral-300 rounded-md"
                  placeholder="Where are you going?"
                />
              </div>
            </div>

            <div>
              <label for="dates" class="block text-sm font-medium text-neutral-700">Dates</label>
              <div class="mt-1 relative">
                <input
                  type="text"
                  name="dates"
                  id="dates"
                  v-model="dateRangeText"
                  class="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-neutral-300 rounded-md cursor-pointer"
                  placeholder="Add dates"
                  readonly
                  @click="showDatePicker = !showDatePicker"
                />
                <div
                  v-if="showDatePicker"
                  class="absolute z-10 mt-1 bg-white shadow-lg rounded-lg p-4 border border-neutral-200"
                >
                  <!-- This would be replaced with an actual date picker component -->
                  <div class="flex justify-between mb-4">
                    <button 
                      class="text-sm font-medium text-primary-600 hover:text-primary-500"
                      @click="clearDates"
                    >
                      Clear dates
                    </button>
                    <button 
                      class="text-sm font-medium text-primary-600 hover:text-primary-500"
                      @click="showDatePicker = false"
                    >
                      Close
                    </button>
                  </div>
                  <div class="text-center p-6 text-sm text-neutral-500">
                    Date picker would be implemented here
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label for="guests" class="block text-sm font-medium text-neutral-700">Guests</label>
              <div class="mt-1">
                <select
                  id="guests"
                  name="guests"
                  v-model="filters.guests"
                  class="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-neutral-300 rounded-md"
                >
                  <option value="1">1 guest</option>
                  <option value="2">2 guests</option>
                  <option value="3">3 guests</option>
                  <option value="4">4 guests</option>
                  <option value="5">5 guests</option>
                  <option value="6">6 guests</option>
                  <option value="7">7 guests</option>
                  <option value="8">8+ guests</option>
                </select>
              </div>
            </div>

            <div>
              <label for="type" class="block text-sm font-medium text-neutral-700">Property Type</label>
              <div class="mt-1">
                <select
                  id="type"
                  name="type"
                  v-model="filters.type"
                  class="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-neutral-300 rounded-md"
                >
                  <option value="">All types</option>
                  <option value="Villa">Villa</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Cabin">Cabin</option>
                  <option value="House">House</option>
                </select>
              </div>
            </div>
          </div>

          <div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label for="price-range" class="block text-sm font-medium text-neutral-700">
                Price range: ${{ filters.priceMin }} - ${{ filters.priceMax }}
              </label>
              <div class="mt-2 px-2">
                <!-- This would be a proper range slider component in a real app -->
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="50"
                  v-model="filters.priceMax"
                  class="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-neutral-700">Amenities</label>
              <div class="mt-2 grid grid-cols-2 gap-2">
                <div v-for="(amenity, index) in popularAmenities" :key="index" class="flex items-center">
                  <input
                    :id="`amenity-${index}`"
                    :value="amenity"
                    v-model="filters.amenities"
                    type="checkbox"
                    class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-neutral-300 rounded"
                  />
                  <label :for="`amenity-${index}`" class="ml-2 text-sm text-neutral-600">{{ amenity }}</label>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-6 flex justify-between">
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 border border-neutral-300 shadow-sm text-sm font-medium rounded-md text-neutral-700 bg-white hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              @click="resetFilters"
            >
              Clear all filters
            </button>
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              @click="applyFilters"
            >
              Search
            </button>
          </div>
        </div>

        <!-- Results -->
        <div>
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-medium text-neutral-900">
              {{ filteredProperties.length }} properties
              <span v-if="filters.location" class="font-normal">
                in {{ filters.location }}
              </span>
            </h2>
            <div class="flex items-center">
              <label for="sort" class="mr-2 text-sm font-medium text-neutral-700">Sort by:</label>
              <select
                id="sort"
                name="sort"
                class="block w-full pl-3 pr-10 py-2 text-base border-neutral-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                v-model="sortOption"
              >
                <option value="recommended">Recommended</option>
                <option value="price-low">Price (low to high)</option>
                <option value="price-high">Price (high to low)</option>
                <option value="rating">Rating</option>
              </select>
            </div>
          </div>

          <!-- Loading state -->
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

          <!-- No results -->
          <div v-else-if="filteredProperties.length === 0" class="text-center py-12 bg-white shadow rounded-lg">
            <SearchIcon class="mx-auto h-12 w-12 text-neutral-400" />
            <h3 class="mt-2 text-lg font-medium text-neutral-900">No properties found</h3>
            <p class="mt-1 text-neutral-500">Try adjusting your search filters</p>
            <button
              @click="resetFilters"
              class="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Clear filters
            </button>
          </div>

          <!-- Results grid -->
          <div v-else class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="property in sortedProperties"
              :key="property.id"
              class="bg-white overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <RouterLink :to="`/properties/${property.id}`" class="block">
                <div class="relative pb-2/3">
                  <img
                    :src="property.images[0]"
                    :alt="property.name"
                    class="absolute h-full w-full object-cover"
                  />
                </div>
                <div class="p-5">
                  <div class="flex justify-between">
                    <div>
                      <h3 class="text-lg font-medium text-neutral-900 truncate">{{ property.name }}</h3>
                      <p class="text-sm text-neutral-500">
                        {{ property.location.city }}, {{ property.location.state }}
                      </p>
                    </div>
                    <div class="flex items-start">
                      <StarIcon class="h-5 w-5 text-accent-400" aria-hidden="true" />
                      <span class="ml-1 text-sm font-medium text-neutral-700">{{ property.rating }}</span>
                    </div>
                  </div>

                  <div class="mt-2">
                    <div class="flex flex-wrap mt-1">
                      <span class="text-sm text-neutral-500">
                        {{ property.capacity.guests }} guests •
                        {{ property.capacity.bedrooms }} bedrooms •
                        {{ property.capacity.beds }} beds •
                        {{ property.capacity.bathrooms }} baths
                      </span>
                    </div>

                    <div class="mt-2 flex flex-wrap gap-1">
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
                  </div>

                  <div class="mt-4 flex items-end justify-between">
                    <div>
                      <span class="text-lg font-semibold text-neutral-900">${{ property.pricing.basePrice }}</span>
                      <span class="text-sm text-neutral-500"> / night</span>
                    </div>
                    <button
                      class="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                      View details
                    </button>
                  </div>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PublicLayout>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { format } from 'date-fns'
import { SearchIcon, StarIcon } from '@heroicons/vue/solid'
import PublicLayout from '../../components/layout/PublicLayout.vue'
import { usePropertyStore } from '../../stores/properties'

const propertyStore = usePropertyStore()
const loading = ref(true)
const showDatePicker = ref(false)
const sortOption = ref('recommended')

const popularAmenities = [
  'WiFi',
  'Pool',
  'Kitchen',
  'Ocean View',
  'Air Conditioning',
  'Mountain View',
  'Hot Tub',
  'Parking'
]

// Initialize filters
const filters = ref({
  location: '',
  type: '',
  guests: 2,
  priceMin: 0,
  priceMax: 1000,
  amenities: [],
  dates: {
    checkIn: null,
    checkOut: null
  }
})

const dateRangeText = computed(() => {
  if (filters.value.dates.checkIn && filters.value.dates.checkOut) {
    return `${format(new Date(filters.value.dates.checkIn), 'MMM d, yyyy')} - ${format(
      new Date(filters.value.dates.checkOut),
      'MMM d, yyyy'
    )}`
  }
  return 'Add dates'
})

// Apply filters to the property store
function applyFilters() {
  propertyStore.updateFilters(filters.value)
  showDatePicker.value = false
}

// Reset all filters
function resetFilters() {
  propertyStore.resetFilters()
  filters.value = {
    location: '',
    type: '',
    guests: 2,
    priceMin: 0,
    priceMax: 1000,
    amenities: [],
    dates: {
      checkIn: null,
      checkOut: null
    }
  }
  sortOption.value = 'recommended'
}

// Clear date selection
function clearDates() {
  filters.value.dates = {
    checkIn: null,
    checkOut: null
  }
}

// Get filtered properties
const filteredProperties = computed(() => {
  return propertyStore.filteredProperties.filter(property => property.status === 'active')
})

// Sort the filtered properties
const sortedProperties = computed(() => {
  const properties = [...filteredProperties.value]
  
  switch (sortOption.value) {
    case 'price-low':
      return properties.sort((a, b) => a.pricing.basePrice - b.pricing.basePrice)
    case 'price-high':
      return properties.sort((a, b) => b.pricing.basePrice - a.pricing.basePrice)
    case 'rating':
      return properties.sort((a, b) => b.rating - a.rating)
    case 'recommended':
    default:
      // Recommended sorting uses a combination of rating and price
      return properties.sort((a, b) => {
        const scoreA = a.rating * 10 - a.pricing.basePrice / 100
        const scoreB = b.rating * 10 - b.pricing.basePrice / 100
        return scoreB - scoreA
      })
  }
})

// Watch for sort option changes
watch(sortOption, () => {
  // Just trigger a reactivity update
})

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