<template>
  <div class="min-h-full">
    <Disclosure as="nav" class="bg-white border-b border-neutral-200" v-slot="{ open }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <div class="flex-shrink-0 flex items-center">
              <RouterLink to="/">
                <img class="h-8 w-auto" src="/logo-dark.svg" alt="Villas" />
              </RouterLink>
            </div>
            <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <RouterLink
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                :class="[
                  isActiveRoute(item.href)
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300',
                  'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                ]"
              >
                {{ item.name }}
              </RouterLink>
            </div>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              type="button"
              class="bg-white p-1 rounded-full text-neutral-400 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
              <span class="absolute top-3 right-3 block h-2 w-2 rounded-full bg-accent-500 ring-2 ring-white"></span>
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="ml-3 relative">
              <div>
                <MenuButton
                  class="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-8 w-8 rounded-full object-cover"
                    :src="user?.avatar || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'"
                    alt="User avatar"
                  />
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <MenuItem v-slot="{ active }">
                    <RouterLink
                      to="/dashboard/settings"
                      :class="[active ? 'bg-neutral-100' : '', 'block px-4 py-2 text-sm text-neutral-700']"
                    >
                      Your Profile
                    </RouterLink>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <RouterLink
                      to="/dashboard/branding"
                      :class="[active ? 'bg-neutral-100' : '', 'block px-4 py-2 text-sm text-neutral-700']"
                    >
                      Branding
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
          </div>
          <div class="-mr-2 flex items-center sm:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="bg-white inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-neutral-500 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <span class="sr-only">Open main menu</span>
              <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="sm:hidden">
        <div class="pt-2 pb-3 space-y-1">
          <Disclosure v-slot="{ open }" v-for="item in navigation" :key="item.name">
            <DisclosureButton
              as="div"
              class="w-full"
            >
              <RouterLink
                :to="item.href"
                :class="[
                  isActiveRoute(item.href)
                    ? 'bg-primary-50 border-primary-500 text-primary-600'
                    : 'border-transparent text-neutral-600 hover:text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300',
                  'block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
                ]"
              >
                {{ item.name }}
              </RouterLink>
            </DisclosureButton>
          </Disclosure>
        </div>
        <div class="pt-4 pb-3 border-t border-neutral-200">
          <div class="flex items-center px-4">
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
              class="ml-auto bg-white flex-shrink-0 p-1 rounded-full text-neutral-400 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-3 space-y-1">
            <Disclosure v-slot="{ open }">
              <DisclosureButton
                as="div"
                class="w-full"
              >
                <RouterLink
                  to="/dashboard/settings"
                  class="block px-4 py-2 text-base font-medium text-neutral-500 hover:text-neutral-700 hover:bg-neutral-50"
                >
                  Your Profile
                </RouterLink>
              </DisclosureButton>
            </Disclosure>
            <Disclosure v-slot="{ open }">
              <DisclosureButton
                as="div"
                class="w-full"
              >
                <RouterLink
                  to="/dashboard/branding"
                  class="block px-4 py-2 text-base font-medium text-neutral-500 hover:text-neutral-700 hover:bg-neutral-50"
                >
                  Branding
                </RouterLink>
              </DisclosureButton>
            </Disclosure>
            <Disclosure v-slot="{ open }">
              <DisclosureButton
                as="div"
                class="w-full"
              >
                <a
                  href="#"
                  class="block px-4 py-2 text-base font-medium text-neutral-500 hover:text-neutral-700 hover:bg-neutral-50"
                  @click.prevent="logout"
                >
                  Sign out
                </a>
              </DisclosureButton>
            </Disclosure>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>

    <div class="min-h-full">
      <div class="py-4">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div class="lg:grid lg:grid-cols-12 lg:gap-x-5">
            <aside class="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-2">
              <nav class="space-y-1">
                <RouterLink
                  v-for="item in sidebarNavigation"
                  :key="item.name"
                  :to="item.href"
                  :class="[
                    isActiveRoute(item.href)
                      ? 'bg-neutral-50 text-primary-600'
                      : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50',
                    'group rounded-md px-3 py-2 flex items-center text-sm font-medium'
                  ]"
                  :aria-current="isActiveRoute(item.href) ? 'page' : undefined"
                >
                  <component
                    :is="item.icon"
                    :class="[
                      isActiveRoute(item.href)
                        ? 'text-primary-500'
                        : 'text-neutral-400 group-hover:text-neutral-500',
                      'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                    ]"
                    aria-hidden="true"
                  />
                  <span class="truncate">{{ item.name }}</span>
                </RouterLink>
              </nav>
            </aside>

            <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-10">
              <main>
                <slot></slot>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import {
  BellIcon,
  HomeIcon,
  MenuIcon,
  XIcon,
  OfficeBuildingIcon,
  CalendarIcon,
  UserGroupIcon,
  CogIcon,
  ChartBarIcon,
  CreditCardIcon,
  ColorSwatchIcon
} from '@heroicons/vue/outline'
import { useAuthStore } from '../../stores/auth'

const route = useRoute()
const authStore = useAuthStore()

const user = computed(() => authStore.user)

const navigation = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'View Site', href: '/' }
]

const sidebarNavigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Properties', href: '/dashboard/properties', icon: OfficeBuildingIcon },
  { name: 'Bookings', href: '/dashboard/bookings', icon: CreditCardIcon },
  { name: 'Calendar', href: '/dashboard/calendar', icon: CalendarIcon },
  { name: 'Guests', href: '/dashboard/guests', icon: UserGroupIcon },
  { name: 'Analytics', href: '/dashboard/analytics', icon: ChartBarIcon },
  { name: 'Branding', href: '/dashboard/branding', icon: ColorSwatchIcon },
  { name: 'Settings', href: '/dashboard/settings', icon: CogIcon }
]

function isActiveRoute(path) {
  if (path === '/dashboard' && route.path === '/dashboard') {
    return true
  }
  if (path !== '/dashboard' && route.path.startsWith(path)) {
    return true
  }
  return false
}

function logout() {
  authStore.logout()
}
</script>