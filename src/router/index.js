import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

// Public routes
import LandingPage from '../views/LandingPage.vue'
import LoginPage from '../views/auth/LoginPage.vue'
import RegisterPage from '../views/auth/RegisterPage.vue'
import ForgotPasswordPage from '../views/auth/ForgotPasswordPage.vue'
import PropertyListingPage from '../views/public/PropertyListingPage.vue'
import PropertyDetailPage from '../views/public/PropertyDetailPage.vue'
import BookingPage from '../views/public/BookingPage.vue'
import ConfirmationPage from '../views/public/ConfirmationPage.vue'

// Owner dashboard routes
import OwnerDashboard from '../views/owner/OwnerDashboard.vue'
import PropertyManagement from '../views/owner/PropertyManagement.vue'
import PropertyEditor from '../views/owner/PropertyEditor.vue'
import BookingManagement from '../views/owner/BookingManagement.vue'
import CalendarView from '../views/owner/CalendarView.vue'
import GuestManagement from '../views/owner/GuestManagement.vue'
import OwnerSettings from '../views/owner/OwnerSettings.vue'
import BrandingSettings from '../views/owner/BrandingSettings.vue'
import AnalyticsDashboard from '../views/owner/AnalyticsDashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // Public Routes
    {
      path: '/',
      name: 'home',
      component: LandingPage,
      meta: { layout: 'public' }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      meta: { layout: 'auth' }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage,
      meta: { layout: 'auth' }
    },
    {
      path: '/forgot-password',
      name: 'forgot-password',
      component: ForgotPasswordPage,
      meta: { layout: 'auth' }
    },
    {
      path: '/properties',
      name: 'property-listings',
      component: PropertyListingPage,
      meta: { layout: 'public' }
    },
    {
      path: '/properties/:id',
      name: 'property-detail',
      component: PropertyDetailPage,
      meta: { layout: 'public' }
    },
    {
      path: '/properties/:id/book',
      name: 'booking',
      component: BookingPage,
      meta: { layout: 'public' }
    },
    {
      path: '/booking/confirmation/:id',
      name: 'booking-confirmation',
      component: ConfirmationPage,
      meta: { layout: 'public' }
    },
    
    // Owner Dashboard Routes (protected)
    {
      path: '/dashboard',
      name: 'owner-dashboard',
      component: OwnerDashboard,
      meta: { requiresAuth: true, layout: 'dashboard' }
    },
    {
      path: '/dashboard/properties',
      name: 'property-management',
      component: PropertyManagement,
      meta: { requiresAuth: true, layout: 'dashboard' }
    },
    {
      path: '/dashboard/properties/new',
      name: 'new-property',
      component: PropertyEditor,
      meta: { requiresAuth: true, layout: 'dashboard' }
    },
    {
      path: '/dashboard/properties/:id/edit',
      name: 'edit-property',
      component: PropertyEditor,
      meta: { requiresAuth: true, layout: 'dashboard' }
    },
    {
      path: '/dashboard/bookings',
      name: 'booking-management',
      component: BookingManagement,
      meta: { requiresAuth: true, layout: 'dashboard' }
    },
    {
      path: '/dashboard/calendar',
      name: 'calendar',
      component: CalendarView,
      meta: { requiresAuth: true, layout: 'dashboard' }
    },
    {
      path: '/dashboard/guests',
      name: 'guest-management',
      component: GuestManagement,
      meta: { requiresAuth: true, layout: 'dashboard' }
    },
    {
      path: '/dashboard/analytics',
      name: 'analytics',
      component: AnalyticsDashboard,
      meta: { requiresAuth: true, layout: 'dashboard' }
    },
    {
      path: '/dashboard/settings',
      name: 'settings',
      component: OwnerSettings,
      meta: { requiresAuth: true, layout: 'dashboard' }
    },
    {
      path: '/dashboard/branding',
      name: 'branding',
      component: BrandingSettings,
      meta: { requiresAuth: true, layout: 'dashboard' }
    },
    
    // 404 route
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundPage.vue'),
      meta: { layout: 'public' }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Navigation guards for authentication
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  // Check if the route requires authentication and the user is not logged in
  if (requiresAuth && !authStore.isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router