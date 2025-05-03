<template>
  <PublicLayout :force-opaque-header="true">
    <div class="bg-white" v-if="loading">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex justify-center">
        <svg
          class="animate-spin h-10 w-10 text-primary-500"
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
      </div>
    </div>

    <div v-else-if="!property" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
      <h1 class="text-3xl font-bold text-neutral-900">Property Not Found</h1>
      <p class="mt-2 text-neutral-600">The property you're looking for doesn't exist or has been removed.</p>
      <RouterLink
        to="/properties"
        class="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
      >
        Browse properties
      </RouterLink>
    </div>

    <div v-else class="bg-white">
      <!-- Back button -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <RouterLink
          to="/properties"
          class="inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-500"
        >
          <ChevronLeftIcon class="mr-1 h-5 w-5" />
          Back to all properties
        </RouterLink>
      </div>

      <!-- Property header -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 class="text-3xl font-bold text-neutral-900">{{ property.name }}</h1>
            <div class="mt-1 flex flex-wrap items-center text-sm text-neutral-600">
              <div class="flex items-center mr-4">
                <StarIcon class="h-4 w-4 text-accent-500" />
                <span class="ml-1">{{ property.rating }}</span>
                <span class="ml-1">({{ property.reviewCount }} reviews)</span>
              </div>
              <span>{{ property.location.city }}, {{ property.location.state }}, {{ property.location.country }}</span>
            </div>
          </div>
          <div class="mt-4 md:mt-0 flex space-x-3">
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 border border-neutral-300 rounded-md shadow-sm text-sm font-medium text-neutral-700 bg-white hover:bg-neutral-50"
            >
              <HeartIcon class="mr-2 h-5 w-5 text-neutral-500" />
              Save
            </button>
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 border border-neutral-300 rounded-md shadow-sm text-sm font-medium text-neutral-700 bg-white hover:bg-neutral-50"
            >
              <ShareIcon class="mr-2 h-5 w-5 text-neutral-500" />
              Share
            </button>
          </div>
        </div>
      </div>

      <!-- Property images -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 rounded-lg overflow-hidden">
          <div class="md:row-span-2 md:col-span-1 h-96">
            <img :src="property.images[0]" :alt="property.name" class="w-full h-full object-cover" />
          </div>
          <div class="grid grid-cols-2 gap-2 h-full">
            <div class="h-48 overflow-hidden">
              <img
                :src="property.images[1] || property.images[0]"
                :alt="property.name"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="h-48 overflow-hidden">
              <img
                :src="property.images[2] || property.images[0]"
                :alt="property.name"
                class="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Property details -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Left column -->
          <div class="lg:col-span-2">
            <div class="border-b border-neutral-200 pb-6">
              <div class="flex justify-between items-start">
                <div>
                  <h2 class="text-2xl font-bold text-neutral-900">
                    {{ property.type }} hosted by Property Owner
                  </h2>
                  <p class="mt-1 text-neutral-600">
                    {{ property.capacity.guests }} guests • {{ property.capacity.bedrooms }} bedrooms •
                    {{ property.capacity.beds }} beds • {{ property.capacity.bathrooms }} bathrooms
                  </p>
                </div>
                <div class="flex-shrink-0">
                  <img
                    class="h-14 w-14 rounded-full"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
                    alt="Host"
                  />
                </div>
              </div>
            </div>

            <div class="py-6 border-b border-neutral-200">
              <h2 class="text-xl font-semibold text-neutral-900 mb-4">About this place</h2>
              <p class="text-neutral-600">{{ property.description }}</p>
            </div>

            <div class="py-6 border-b border-neutral-200">
              <h2 class="text-xl font-semibold text-neutral-900 mb-4">What this place offers</h2>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div v-for="(amenity, index) in property.amenities" :key="index" class="flex items-center">
                  <CheckIcon class="h-5 w-5 text-primary-500 mr-2" />
                  <span>{{ amenity }}</span>
                </div>
              </div>
            </div>

            <div class="py-6 border-b border-neutral-200">
              <h2 class="text-xl font-semibold text-neutral-900 mb-4">Location</h2>
              <p class="text-neutral-600 mb-4">
                {{ property.location.address }}, {{ property.location.city }}, {{ property.location.state }},
                {{ property.location.country }}, {{ property.location.zip }}
              </p>
              <div class="h-64 bg-neutral-200 rounded-lg overflow-hidden">
                <!-- Map would go here -->
                <div class="h-full w-full flex items-center justify-center bg-neutral-100">
                  <MapIcon class="h-12 w-12 text-neutral-400" />
                  <span class="ml-2 text-neutral-600">Map view</span>
                </div>
              </div>
            </div>

            <div class="py-6">
              <div class="flex items-center justify-between mb-4">
                <h2 class="text-xl font-semibold text-neutral-900">{{ property.reviewCount }} reviews</h2>
                <div class="flex items-center">
                  <StarIcon class="h-5 w-5 text-accent-500" />
                  <span class="ml-1 font-medium">{{ property.rating }} overall rating</span>
                </div>
              </div>

              <!-- Reviews would go here -->
              <div class="space-y-6">
                <div v-for="i in 3" :key="i" class="border-b border-neutral-200 pb-6 last:border-0">
                  <div class="flex items-center mb-2">
                    <img
                      class="h-10 w-10 rounded-full mr-3"
                      src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150"
                      alt="Reviewer"
                    />
                    <div>
                      <p class="font-medium">John Doe</p>
                      <p class="text-sm text-neutral-500">{{ randomDate() }}</p>
                    </div>
                  </div>
                  <p class="text-neutral-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies
                    ultricies, nunc nisl ultricies nunc, eget ultricies nisl nisl eget.
                  </p>
                </div>
              </div>

              <button
                type="button"
                class="mt-6 inline-flex items-center px-4 py-2 border border-neutral-300 rounded-md shadow-sm text-sm font-medium text-neutral-700 bg-white hover:bg-neutral-50"
              >
                Show all reviews
              </button>
            </div>
          </div>

          <!-- Right column - Booking form -->
          <div class="lg:col-span-1">
            <div class="sticky top-24">
              <div class="bg-white rounded-lg shadow-lg border border-neutral-200 p-6">
                <div class="flex justify-between items-baseline mb-4">
                  <div>
                    <span class="text-2xl font-semibold text-neutral-900">${{ property.pricing.basePrice }}</span>
                    <span class="text-neutral-600"> / night</span>
                  </div>
                  <div class="flex items-center">
                    <StarIcon class="h-4 w-4 text-accent-500" />
                    <span class="ml-1 text-sm">
                      {{ property.rating }} · {{ property.reviewCount }} reviews
                    </span>
                  </div>
                </div>

                <div class="border border-neutral-300 rounded-lg overflow-hidden mb-4">
                  <div class="grid grid-cols-2 divide-x divide-neutral-300">
                    <div class="p-3">
                      <label class="block text-xs font-medium text-neutral-700">CHECK-IN</label>
                      <input
                        type="text"
                        placeholder="Add date"
                        class="w-full border-0 p-0 text-neutral-900 placeholder-neutral-400 focus:ring-0 sm:text-sm"
                        readonly
                      />
                    </div>
                    <div class="p-3">
                      <label class="block text-xs font-medium text-neutral-700">CHECKOUT</label>
                      <input
                        type="text"
                        placeholder="Add date"
                        class="w-full border-0 p-0 text-neutral-900 placeholder-neutral-400 focus:ring-0 sm:text-sm"
                        readonly
                      />
                    </div>
                  </div>
                  <div class="border-t border-neutral-300 p-3">
                    <label class="block text-xs font-medium text-neutral-700">GUESTS</label>
                    <select
                      class="mt-1 block w-full pl-0 py-0 border-0 bg-white focus:ring-0 sm:text-sm"
                      v-model="guestCount"
                    >
                      <option v-for="i in property.capacity.guests" :key="i" :value="i">{{ i }} guest{{ i > 1 ? 's' : '' }}</option>
                    </select>
                  </div>
                </div>

                <RouterLink
                  :to="`/properties/${property.id}/book`"
                  class="mt-4 w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Book now
                </RouterLink>
                <div class="text-center text-sm text-neutral-500 mt-2">You won't be charged yet</div>

                <div class="mt-6 space-y-4">
                  <div class="flex justify-between">
                    <div>${{ property.pricing.basePrice }} x 5 nights</div>
                    <div>${{ property.pricing.basePrice * 5 }}</div>
                  </div>
                  <div class="flex justify-between">
                    <div>Cleaning fee</div>
                    <div>${{ property.pricing.cleaningFee }}</div>
                  </div>
                  <div class="flex justify-between">
                    <div>Service fee</div>
                    <div>${{ property.pricing.serviceFee }}</div>
                  </div>
                  <div class="flex justify-between pt-4 border-t border-neutral-200 font-semibold">
                    <div>Total before taxes</div>
                    <div>${{ property.pricing.basePrice * 5 + property.pricing.cleaningFee + property.pricing.serviceFee }}</div>
                  </div>
                </div>
              </div>

              <div class="mt-6">
                <button
                  type="button"
                  class="w-full inline-flex justify-center items-center px-4 py-2 border border-neutral-300 rounded-md shadow-sm text-sm font-medium text-neutral-700 bg-white hover:bg-neutral-50"
                >
                  <FlagIcon class="h-5 w-5 text-neutral-500 mr-2" />
                  Report this listing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PublicLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import {
  StarIcon,
  HeartIcon,
  ShareIcon,
  CheckIcon,
  MapIcon,
  ChevronLeftIcon,
  FlagIcon
} from '@heroicons/vue/solid'
import PublicLayout from '../../components/layout/PublicLayout.vue'
import { usePropertyStore } from '../../stores/properties'

const route = useRoute()
const propertyStore = usePropertyStore()
const property = ref(null)
const loading = ref(true)
const guestCount = ref(2)

function randomDate() {
  const start = new Date(2023, 0, 1)
  const end = new Date()
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  })
}

onMounted(async () => {
  const propertyId = route.params.id
  property.value = await propertyStore.getProperty(propertyId)
  if (property.value) {
    guestCount.value = Math.min(2, property.value.capacity.guests)
  }
  loading.value = false
})
</script>