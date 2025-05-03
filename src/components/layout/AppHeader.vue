<template>
  <header :class="[
    'fixed w-full top-0 z-50 transition-all duration-300',
    isScrolled || !isTransparent ? 'bg-white shadow-elevation-2' : 'bg-transparent',
    isScrolled || !isTransparent ? 'text-neutral-900' : 'text-white'
  ]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <RouterLink to="/" class="flex-shrink-0 flex items-center">
            <img 
              :src="isScrolled || !isTransparent ? '/logo-dark.svg' : '/logo-light.svg'" 
              alt="Villas Logo" 
              class="h-8 w-auto" 
            />
          </RouterLink>
          <div class="hidden md:ml-8 md:flex md:space-x-8">
            <RouterLink 
              v-for="item in navItems" 
              :key="item.name" 
              :to="item.href"
              :class="[
                'inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 transition-colors',
                isActiveRoute(item.href) 
                  ? 'border-primary-600 text-primary-600' 
                  : (isScrolled || !isTransparent) 
                    ? 'border-transparent text-neutral-700 hover:text-neutral-900 hover:border-neutral-300' 
                    : 'border-transparent text-white/90 hover:text-white hover:border-white/30'
              ]"
            >
              {{ item.name }}
            </RouterLink>
          </div>
        </div>
        <div class="flex items-center">
          <div class="hidden md:ml-4 md:flex md:items-center md:space-x-4">
            <template v-if="isAuthenticated">
              <button
                type="button"
                class="relative p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                :class="(isScrolled || !isTransparent) ? 'text-neutral-500 hover:text-neutral-700' : 'text-white/80 hover:text-white'"
              >
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
                <span class="absolute top-0 right-0 block h-2 w-2 rounded-full bg-accent-500 ring-2 ring-white"></span>
              </button>
              
              <!-- Profile dropdown -->
              <Menu as="div" class="relative ml-4 flex-shrink-0">
                <div>
                  <MenuButton class="bg-white rounded-full flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="h-8 w-8 rounded-full object-cover"
                      :src="user?.avatar || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'"
                      alt="User avatar"
                    />
                  </MenuButton>
                </div>
                <transition
                  enter-active-class="transition ease-out duration-100"
                  enter-from-class="transform opacity-0 scale-95"
                  enter-to-class="transform opacity-100 scale-100"
                  leave-active-class="transition ease-in duration-75"
                  leave-from-class="transform opacity-100 scale-100"
                  leave-to-class="transform opacity-0 scale-95"
                >
                  <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-elevation-3 py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <MenuItem v-if="isPropertyOwner" v-slot="{ active }">
                      <RouterLink
                        to="/dashboard"
                        :class="[active ? 'bg-neutral-100' : '', 'block px-4 py-2 text-sm text-neutral-700']"
                      >
                        Dashboard
                      </RouterLink>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <RouterLink
                        to="/dashboard/settings"
                        :class="[active ? 'bg-neutral-100' : '', 'block px-4 py-2 text-sm text-neutral-700']"
                      >
                        Your Profile
                      </RouterLink>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <a
                        href="#"
                        :class="[active ? 'bg-neutral-100' : '', 'block px-4 py-2 text-sm text-neutral-700']"
                        @click.prevent="logout"
                      >
                        Sign out
                      </a>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </template>
            <template v-else>
              <RouterLink
                to="/login"
                :class="[
                  'inline-flex items-center px-4 py-2 text-sm font-medium rounded-md',
                  (isScrolled || !isTransparent) 
                    ? 'text-primary-600 bg-white hover:bg-neutral-50 border border-primary-300' 
                    : 'text-white bg-transparent hover:bg-white/10 border border-white/30'
                ]"
              >
                Sign in
              </RouterLink>
              <RouterLink
                to="/register"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Sign up
              </RouterLink>
            </template>
          </div>
          <div class="flex items-center md:hidden">
            <!-- Mobile menu button -->
            <Disclosure v-slot="{ open }">
              <DisclosureButton
                class="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                :class="(isScrolled || !isTransparent) ? 'text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100' : 'text-white hover:text-white hover:bg-white/10'"
              >
                <span class="sr-only">Open main menu</span>
                <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
              </DisclosureButton>

              <!-- Mobile menu, show/hide based on menu state. -->
              <DisclosurePanel class="md:hidden bg-white shadow-lg">
                <div class="pt-2 pb-3 space-y-1">
                  <RouterLink
                    v-for="item in navItems"
                    :key="item.name"
                    :to="item.href"
                    :class="[
                      isActiveRoute(item.href)
                        ? 'bg-primary-50 border-primary-500 text-primary-700'
                        : 'border-transparent text-neutral-600 hover:bg-neutral-50 hover:border-neutral-300 hover:text-neutral-800',
                      'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                    ]"
                  >
                    {{ item.name }}
                  </RouterLink>
                </div>
                <div class="pt-4 pb-3 border-t border-neutral-200">
                  <div v-if="isAuthenticated" class="flex items-center px-4">
                    <div class="flex-shrink-0">
                      <img
                        class="h-10 w-10 rounded-full object-cover"
                        :src="user?.avatar || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'"
                        alt="User avatar"
                      />
                    </div>
                    <div class="ml-3">
                      <div class="text-base font-medium text-neutral-800">{{ user?.name }}</div>
                      <div class="text-sm font-medium text-neutral-500">{{ user?.email }}</div>
                    </div>
                    <button
                      type="button"
                      class="ml-auto flex-shrink-0 bg-white p-1 rounded-full text-neutral-400 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                      <span class="sr-only">View notifications</span>
                      <BellIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div class="mt-3 space-y-1">
                    <RouterLink
                      v-if="isAuthenticated && isPropertyOwner"
                      to="/dashboard"
                      class="block px-4 py-2 text-base font-medium text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100"
                    >
                      Dashboard
                    </RouterLink>
                    <RouterLink
                      v-if="isAuthenticated"
                      to="/dashboard/settings"
                      class="block px-4 py-2 text-base font-medium text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100"
                    >
                      Your Profile
                    </RouterLink>
                    <a
                      v-if="isAuthenticated"
                      href="#"
                      class="block px-4 py-2 text-base font-medium text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100"
                      @click.prevent="logout"
                    >
                      Sign out
                    </a>
                    <RouterLink
                      v-else
                      to="/login"
                      class="block px-4 py-2 text-base font-medium text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100"
                    >
                      Sign in
                    </RouterLink>
                    <RouterLink
                      v-if="!isAuthenticated"
                      to="/register"
                      class="block px-4 py-2 text-base font-medium text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100"
                    >
                      Sign up
                    </RouterLink>
                  </div>
                </div>
              </DisclosurePanel>
            </Disclosure>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'
import { useAuthStore } from '../../stores/auth'

const props = defineProps({
  isTransparent: {
    type: Boolean,
    default: false
  }
})

const route = useRoute()
const authStore = useAuthStore()
const isScrolled = ref(false)

const isAuthenticated = computed(() => authStore.isAuthenticated)
const isPropertyOwner = computed(() => authStore.isPropertyOwner)
const user = computed(() => authStore.user)

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Properties', href: '/properties' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
]

function isActiveRoute(path) {
  return route.path === path
}

function logout() {
  authStore.logout()
}

function onScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
  onScroll() // Check initial scroll position
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>