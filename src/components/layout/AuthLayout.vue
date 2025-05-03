<template>
  <div class="min-h-full flex">
    <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
          <RouterLink to="/">
            <img class="h-12 w-auto" src="/logo-dark.svg" alt="Villas" />
          </RouterLink>
          <h2 class="mt-6 text-3xl font-extrabold text-neutral-900">
            <slot name="title">Welcome back</slot>
          </h2>
          <p class="mt-2 text-sm text-neutral-600">
            <slot name="subtitle">Sign in to your account</slot>
          </p>
        </div>

        <div class="mt-8">
          <slot></slot>
        </div>
      </div>
    </div>
    <div class="hidden lg:block relative w-0 flex-1">
      <img
        class="absolute inset-0 h-full w-full object-cover"
        src="https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="Luxury vacation rental"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-primary-900/70 to-primary-800/40 mix-blend-multiply"></div>
      <div class="absolute inset-0 flex items-center justify-center p-12">
        <div class="max-w-xl">
          <h2 class="text-4xl font-bold text-white">Manage your properties with confidence</h2>
          <p class="mt-4 text-xl text-white/80">
            Create your own branded booking site and manage all your properties in one place.
          </p>
          <div class="mt-8 grid grid-cols-2 gap-4">
            <div class="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div class="text-2xl font-bold text-white">500+</div>
              <div class="text-white/80">Property owners trust us</div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <div class="text-2xl font-bold text-white">99%</div>
              <div class="text-white/80">Booking completion rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>