<template>
  <div class="flex flex-col items-center justify-center p-6">
    <h1 class="text-3xl font-bold mb-8">Reset Password</h1>
    <div class="w-full max-w-md">
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            placeholder="Enter your email"
          />
        </div>
        <button
          type="submit"
          :disabled="isLoading"
          class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          {{ isLoading ? 'Sending...' : 'Send Reset Link' }}
        </button>
      </form>
      <div class="mt-4 text-center">
        <router-link to="/login" class="text-sm text-primary-600 hover:text-primary-500">
          Back to Login
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const isLoading = ref(false)

const handleSubmit = async () => {
  isLoading.value = true
  try {
    // TODO: Implement password reset functionality
    console.log('Password reset requested for:', email.value)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    alert('If an account exists with this email, you will receive password reset instructions.')
    router.push('/login')
  } catch (error) {
    console.error('Password reset error:', error)
    alert('An error occurred. Please try again.')
  } finally {
    isLoading.value = false
  }
}
</script>