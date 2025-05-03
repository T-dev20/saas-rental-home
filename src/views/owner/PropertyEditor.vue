<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-2xl font-bold mb-6">
      {{ isEditing ? 'Edit Property' : 'Add New Property' }}
    </h1>
    <!-- Placeholder for property editor form -->
    <div class="bg-white rounded-lg shadow p-6">
      <p class="text-gray-500">Property editor form will be implemented here</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isEditing = computed(() => route.name === 'edit-property')
</script>