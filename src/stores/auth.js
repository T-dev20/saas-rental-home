import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

// In a real application, this would integrate with your backend authentication system
// For this demo, we'll simulate authentication with local storage

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()
  const user = ref(JSON.parse(localStorage.getItem('user')) || null)
  const loading = ref(false)
  const error = ref(null)

  const isAuthenticated = computed(() => !!user.value)
  const isPropertyOwner = computed(() => user.value?.role === 'owner')

  // Login function
  async function login(email, password) {
    loading.value = true
    error.value = null
    
    try {
      // In a real app, this would be an API call to your authentication endpoint
      // For demo purposes, we'll simulate a successful login with sample data
      if (email && password) {
        // Simulate API response delay
        await new Promise(resolve => setTimeout(resolve, 800))
        
        // Simulate successful login
        const userData = {
          id: 'user_123',
          email: email,
          name: 'Alex Johnson',
          role: 'owner',
          properties: 3,
          avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150'
        }
        
        // Set user in state and localStorage
        user.value = userData
        localStorage.setItem('user', JSON.stringify(userData))
        
        return true
      } else {
        throw new Error('Email and password are required')
      }
    } catch (err) {
      error.value = err.message || 'Login failed'
      return false
    } finally {
      loading.value = false
    }
  }

  // Register function
  async function register(userData) {
    loading.value = true
    error.value = null
    
    try {
      // In a real app, this would be an API call to your registration endpoint
      // For demo purposes, we'll simulate a successful registration
      if (userData.email && userData.password && userData.name) {
        // Simulate API response delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Simulate successful registration
        const newUser = {
          id: 'user_' + Date.now(),
          email: userData.email,
          name: userData.name,
          role: 'owner',
          properties: 0,
          avatar: null
        }
        
        user.value = newUser
        localStorage.setItem('user', JSON.stringify(newUser))
        
        return true
      } else {
        throw new Error('All fields are required')
      }
    } catch (err) {
      error.value = err.message || 'Registration failed'
      return false
    } finally {
      loading.value = false
    }
  }

  // Logout function
  function logout() {
    user.value = null
    localStorage.removeItem('user')
    router.push('/login')
  }

  // Request password reset
  async function requestPasswordReset(email) {
    loading.value = true
    error.value = null
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800))
      
      // In a real app, this would send a reset email
      return true
    } catch (err) {
      error.value = err.message || 'Failed to send password reset email'
      return false
    } finally {
      loading.value = false
    }
  }

  // Update user profile
  async function updateProfile(profileData) {
    loading.value = true
    error.value = null
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800))
      
      // Update user data
      const updatedUser = { ...user.value, ...profileData }
      user.value = updatedUser
      localStorage.setItem('user', JSON.stringify(updatedUser))
      
      return true
    } catch (err) {
      error.value = err.message || 'Failed to update profile'
      return false
    } finally {
      loading.value = false
    }
  }

  return {
    user,
    loading,
    error,
    isAuthenticated,
    isPropertyOwner,
    login,
    logout,
    register,
    requestPasswordReset,
    updateProfile
  }
})