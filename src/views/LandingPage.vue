<template>
  <PublicLayout>
    <!-- Hero section -->
    <div class="relative">
      <div class="absolute inset-0">
        <img
          class="w-full h-full object-cover"
          src="https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Luxury villa with pool"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-primary-900/70 to-primary-800/40 mix-blend-multiply"></div>
      </div>
      <div class="relative px-4 py-32 sm:px-6 sm:py-40 lg:py-52 lg:px-8">
        <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl max-w-3xl mx-auto text-center">
          Your properties, your brand, your success
        </h1>
        <p class="mt-6 max-w-2xl mx-auto text-xl text-white/80 text-center">
          Create your own branded booking platform and take control of your property management business.
        </p>
        <div class="mt-10 max-w-md mx-auto sm:flex sm:justify-center md:mt-12">
          <div class="rounded-md shadow">
            <RouterLink
              to="/register"
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-accent-500 hover:bg-accent-600 md:py-4 md:text-lg md:px-10"
            >
              Get started
            </RouterLink>
          </div>
          <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <RouterLink
              to="/properties"
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-accent-600 bg-white hover:bg-neutral-50 md:py-4 md:text-lg md:px-10"
            >
              View properties
            </RouterLink>
          </div>
        </div>
      </div>
    </div>

    <!-- Feature section -->
    <div class="py-16 bg-white sm:py-24 lg:py-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
          <h2 class="text-base text-accent-600 font-semibold tracking-wide uppercase">Property Management</h2>
          <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
            A better way to manage your properties
          </p>
          <p class="mt-4 max-w-2xl text-xl text-neutral-500 lg:mx-auto">
            Our platform gives you everything you need to manage your properties, bookings, and guests in one place.
          </p>
        </div>

        <div class="mt-16">
          <div class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3">
            <div class="relative">
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <div class="ml-16">
                <h3 class="text-lg font-medium text-neutral-900">Your own branded site</h3>
                <p class="mt-2 text-base text-neutral-500">
                  Customize your booking site with your own branding, colors, and domain to create a seamless experience for your guests.
                </p>
              </div>
            </div>

            <div class="relative">
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                </svg>
              </div>
              <div class="ml-16">
                <h3 class="text-lg font-medium text-neutral-900">Dynamic pricing</h3>
                <p class="mt-2 text-base text-neutral-500">
                  Set seasonal rates, weekend pricing, and special offers to maximize your revenue and occupancy.
                </p>
              </div>
            </div>

            <div class="relative">
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div class="ml-16">
                <h3 class="text-lg font-medium text-neutral-900">Instant bookings</h3>
                <p class="mt-2 text-base text-neutral-500">
                  Let guests book instantly or require approval, with automated confirmations and payment processing.
                </p>
              </div>
            </div>

            <div class="relative">
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
              <div class="ml-16">
                <h3 class="text-lg font-medium text-neutral-900">Guest communication</h3>
                <p class="mt-2 text-base text-neutral-500">
                  Communicate with guests before, during, and after their stay with automated messages and a unified inbox.
                </p>
              </div>
            </div>

            <div class="relative">
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div class="ml-16">
                <h3 class="text-lg font-medium text-neutral-900">Analytics & reporting</h3>
                <p class="mt-2 text-base text-neutral-500">
                  Gain insights into your performance with detailed analytics on bookings, revenue, and occupancy rates.
                </p>
              </div>
            </div>

            <div class="relative">
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </div>
              <div class="ml-16">
                <h3 class="text-lg font-medium text-neutral-900">Calendar management</h3>
                <p class="mt-2 text-base text-neutral-500">
                  View and manage all your bookings in a unified calendar, with color-coding and availability controls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Testimonial section -->
    <div class="bg-primary-700">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
              Trusted by property owners worldwide
            </h2>
            <p class="mt-3 max-w-md text-lg text-primary-100 md:mt-5">
              Join hundreds of property owners who have transformed their business with our platform.
            </p>
            <div class="mt-8 flex">
              <div class="rounded-md shadow">
                <RouterLink
                  to="/register"
                  class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50"
                >
                  Get started today
                </RouterLink>
              </div>
              <div class="ml-3 inline-flex">
                <RouterLink
                  to="/contact"
                  class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-500"
                >
                  Contact sales
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="mt-12 grid gap-6 lg:mt-0 lg:grid-cols-1">
            <div class="bg-white overflow-hidden shadow rounded-lg">
              <div class="px-6 py-8 sm:p-10 sm:pb-6">
                <div class="flex items-baseline">
                  <div class="flex">
                    <span v-for="star in 5" :key="star" class="text-accent-400">
                      <svg class="h-5 w-5 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div class="mt-4">
                  <p class="text-lg text-neutral-700">
                    "Since using this platform, our bookings have increased by 40% and we're saving 15 hours per week on administration. The customized branding has really helped us stand out."
                  </p>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                    <img
                      class="h-10 w-10 rounded-full"
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
                      alt=""
                    />
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-neutral-900">Michael Thompson</p>
                    <p class="text-sm text-neutral-500">Coastal Properties, California</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-white overflow-hidden shadow rounded-lg">
              <div class="px-6 py-8 sm:p-10 sm:pb-6">
                <div class="flex items-baseline">
                  <div class="flex">
                    <span v-for="star in 5" :key="star" class="text-accent-400">
                      <svg class="h-5 w-5 fill-current" viewBox="0 0 20 20">
                        <path
                          d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
                <div class="mt-4">
                  <p class="text-lg text-neutral-700">
                    "The analytics dashboard has been a game-changer for our pricing strategy. We've increased our average booking value by 25% while maintaining high occupancy rates."
                  </p>
                </div>
                <div class="mt-6 flex items-center">
                  <div class="flex-shrink-0">
                    <img
                      class="h-10 w-10 rounded-full"
                      src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
                      alt=""
                    />
                  </div>
                  <div class="ml-3">
                    <p class="text-sm font-medium text-neutral-900">Sophia Rodriguez</p>
                    <p class="text-sm text-neutral-500">Mountain Retreats, Colorado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA section -->
    <div class="bg-white">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="bg-primary-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div class="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div class="lg:self-center">
              <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
                <span class="block">Ready to take control?</span>
                <span class="block">Start your free trial today.</span>
              </h2>
              <p class="mt-4 text-lg leading-6 text-primary-200">
                Get started with a 14-day free trial. No credit card required.
              </p>
              <RouterLink
                to="/register"
                class="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-primary-600 hover:bg-primary-50"
              >
                Sign up for free
              </RouterLink>
            </div>
          </div>
          <div class="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <img
              class="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src="https://images.pexels.com/photos/7147743/pexels-photo-7147743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  </PublicLayout>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import PublicLayout from '../components/layout/PublicLayout.vue'
</script>

<style scoped>
.aspect-w-5 {
  position: relative;
  padding-bottom: calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);
  --tw-aspect-w: 5;
}

.aspect-h-3 {
  --tw-aspect-h: 3;
}

.aspect-w-2 {
  --tw-aspect-w: 2;
}

.aspect-h-1 {
  --tw-aspect-h: 1;
}

.aspect-w-5 > *, .aspect-w-2 > * {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

@media (min-width: 768px) {
  .md\:aspect-w-2 {
    --tw-aspect-w: 2;
  }
  
  .md\:aspect-h-1 {
    --tw-aspect-h: 1;
  }
}
</style>