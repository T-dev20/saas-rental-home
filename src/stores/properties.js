import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// Sample property data for demo purposes
const sampleProperties = [
  {
    id: 'prop_1',
    ownerId: 'user_123',
    name: 'Oceanview Villa',
    description: 'Luxurious villa with breathtaking ocean views, private pool, and modern amenities.',
    type: 'Villa',
    location: {
      address: '123 Coastal Road',
      city: 'Malibu',
      state: 'California',
      country: 'USA',
      zip: '90265',
      coordinates: {
        lat: 34.025922,
        lng: -118.779757
      }
    },
    images: [
      'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    amenities: [
      'Private Pool',
      'Ocean View',
      'Spa',
      'Fully Equipped Kitchen',
      'WiFi',
      'Air Conditioning',
      'BBQ Area',
      'Parking'
    ],
    capacity: {
      guests: 8,
      bedrooms: 4,
      beds: 5,
      bathrooms: 3
    },
    pricing: {
      basePrice: 695,
      cleaningFee: 150,
      serviceFee: 85,
      currency: 'USD'
    },
    rating: 4.9,
    reviewCount: 48,
    availability: {
      minStay: 2,
      maxStay: 14,
      instantBook: true,
      booked: [
        { start: '2025-01-15', end: '2025-01-20' },
        { start: '2025-02-10', end: '2025-02-15' }
      ]
    },
    status: 'active',
    createdAt: '2024-05-15T10:30:00Z',
    updatedAt: '2024-09-05T14:15:00Z'
  },
  {
    id: 'prop_2',
    ownerId: 'user_123',
    name: 'Mountain Retreat Cabin',
    description: 'Cozy cabin nestled in the mountains with stunning views and outdoor activities nearby.',
    type: 'Cabin',
    location: {
      address: '456 Pine Ridge',
      city: 'Aspen',
      state: 'Colorado',
      country: 'USA',
      zip: '81611',
      coordinates: {
        lat: 39.191097,
        lng: -106.817535
      }
    },
    images: [
      'https://images.pexels.com/photos/803975/pexels-photo-803975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    amenities: [
      'Mountain View',
      'Fireplace',
      'Hot Tub',
      'WiFi',
      'Fully Equipped Kitchen',
      'Heating',
      'Parking'
    ],
    capacity: {
      guests: 6,
      bedrooms: 3,
      beds: 3,
      bathrooms: 2
    },
    pricing: {
      basePrice: 350,
      cleaningFee: 100,
      serviceFee: 50,
      currency: 'USD'
    },
    rating: 4.8,
    reviewCount: 36,
    availability: {
      minStay: 2,
      maxStay: 10,
      instantBook: true,
      booked: [
        { start: '2025-01-01', end: '2025-01-10' },
        { start: '2025-02-20', end: '2025-02-28' }
      ]
    },
    status: 'active',
    createdAt: '2024-06-10T08:45:00Z',
    updatedAt: '2024-08-22T16:30:00Z'
  },
  {
    id: 'prop_3',
    ownerId: 'user_123',
    name: 'Downtown Luxury Loft',
    description: 'Modern loft in the heart of the city with high-end finishes and stunning city views.',
    type: 'Apartment',
    location: {
      address: '789 Urban Street',
      city: 'New York',
      state: 'New York',
      country: 'USA',
      zip: '10001',
      coordinates: {
        lat: 40.748817,
        lng: -73.985428
      }
    },
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    amenities: [
      'City View',
      'Gym Access',
      'WiFi',
      'Air Conditioning',
      'Fully Equipped Kitchen',
      'Smart TV',
      'Washer/Dryer',
      'Elevator'
    ],
    capacity: {
      guests: 4,
      bedrooms: 2,
      beds: 2,
      bathrooms: 2
    },
    pricing: {
      basePrice: 450,
      cleaningFee: 120,
      serviceFee: 65,
      currency: 'USD'
    },
    rating: 4.7,
    reviewCount: 52,
    availability: {
      minStay: 3,
      maxStay: 30,
      instantBook: true,
      booked: [
        { start: '2025-01-05', end: '2025-01-12' },
        { start: '2025-03-01', end: '2025-03-15' }
      ]
    },
    status: 'active',
    createdAt: '2024-04-05T12:15:00Z',
    updatedAt: '2024-09-10T09:45:00Z'
  }
]

// Sample bookings data for demo purposes
const sampleBookings = [
  {
    id: 'book_1',
    propertyId: 'prop_1',
    propertyName: 'Oceanview Villa',
    guestId: 'guest_1',
    guestName: 'John Smith',
    guestEmail: 'john.smith@example.com',
    checkIn: '2025-01-15',
    checkOut: '2025-01-20',
    guests: {
      adults: 4,
      children: 2,
      infants: 0
    },
    totalAmount: 3975,
    status: 'confirmed',
    paymentStatus: 'paid',
    createdAt: '2024-09-05T15:30:00Z'
  },
  {
    id: 'book_2',
    propertyId: 'prop_2',
    propertyName: 'Mountain Retreat Cabin',
    guestId: 'guest_2',
    guestName: 'Emily Johnson',
    guestEmail: 'emily.j@example.com',
    checkIn: '2025-01-01',
    checkOut: '2025-01-10',
    guests: {
      adults: 3,
      children: 1,
      infants: 1
    },
    totalAmount: 3650,
    status: 'confirmed',
    paymentStatus: 'paid',
    createdAt: '2024-08-15T10:45:00Z'
  },
  {
    id: 'book_3',
    propertyId: 'prop_3',
    propertyName: 'Downtown Luxury Loft',
    guestId: 'guest_3',
    guestName: 'Michael Brown',
    guestEmail: 'michael.b@example.com',
    checkIn: '2025-01-05',
    checkOut: '2025-01-12',
    guests: {
      adults: 2,
      children: 0,
      infants: 0
    },
    totalAmount: 3285,
    status: 'confirmed',
    paymentStatus: 'paid',
    createdAt: '2024-09-01T13:20:00Z'
  },
  {
    id: 'book_4',
    propertyId: 'prop_1',
    propertyName: 'Oceanview Villa',
    guestId: 'guest_4',
    guestName: 'Sarah Wilson',
    guestEmail: 'sarah.w@example.com',
    checkIn: '2025-02-10',
    checkOut: '2025-02-15',
    guests: {
      adults: 6,
      children: 0,
      infants: 0
    },
    totalAmount: 3740,
    status: 'confirmed',
    paymentStatus: 'paid',
    createdAt: '2024-07-22T09:15:00Z'
  }
]

export const usePropertyStore = defineStore('properties', () => {
  // State
  const properties = ref([...sampleProperties]) // Clone to avoid mutations
  const bookings = ref([...sampleBookings])
  const loading = ref(false)
  const error = ref(null)
  const filters = ref({
    location: '',
    type: '',
    guests: 1,
    priceMin: 0,
    priceMax: 1000,
    amenities: [],
    dates: {
      checkIn: null,
      checkOut: null
    }
  })

  // Getters
  const ownedProperties = computed(() => {
    // In a real app, this would filter by the current user's ID
    return properties.value.filter(p => p.ownerId === 'user_123')
  })

  const filteredProperties = computed(() => {
    return properties.value.filter(property => {
      // Location filter
      if (filters.value.location && 
          !property.location.city.toLowerCase().includes(filters.value.location.toLowerCase()) &&
          !property.location.state.toLowerCase().includes(filters.value.location.toLowerCase()) &&
          !property.location.country.toLowerCase().includes(filters.value.location.toLowerCase())) {
        return false
      }
      
      // Property type filter
      if (filters.value.type && property.type !== filters.value.type) {
        return false
      }
      
      // Guests filter
      if (filters.value.guests > property.capacity.guests) {
        return false
      }
      
      // Price filter
      if (property.pricing.basePrice < filters.value.priceMin || 
          property.pricing.basePrice > filters.value.priceMax) {
        return false
      }
      
      // Amenities filter
      if (filters.value.amenities.length > 0) {
        const hasAllAmenities = filters.value.amenities.every(amenity => 
          property.amenities.includes(amenity)
        )
        if (!hasAllAmenities) return false
      }
      
      // Date availability filter
      if (filters.value.dates.checkIn && filters.value.dates.checkOut) {
        // Check if property is available for the selected dates
        const isBooked = property.availability.booked.some(booking => {
          const bookingStart = new Date(booking.start)
          const bookingEnd = new Date(booking.end)
          const checkIn = new Date(filters.value.dates.checkIn)
          const checkOut = new Date(filters.value.dates.checkOut)
          
          // Check if there is an overlap
          return (
            (checkIn >= bookingStart && checkIn < bookingEnd) || 
            (checkOut > bookingStart && checkOut <= bookingEnd) ||
            (checkIn <= bookingStart && checkOut >= bookingEnd)
          )
        })
        
        if (isBooked) return false
      }
      
      return true
    })
  })

  const propertyBookings = computed(() => {
    return (propertyId) => {
      return bookings.value.filter(booking => booking.propertyId === propertyId)
    }
  })

  // Actions
  async function fetchProperties() {
    loading.value = true
    error.value = null
    
    try {
      // In a real app, this would be an API call
      // For demo, just simulate a delay
      await new Promise(resolve => setTimeout(resolve, 800))
      
      // Using sample data already loaded
      return properties.value
    } catch (err) {
      error.value = err.message || 'Failed to fetch properties'
      return []
    } finally {
      loading.value = false
    }
  }

  async function fetchBookings() {
    loading.value = true
    error.value = null
    
    try {
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 800))
      
      // Using sample data already loaded
      return bookings.value
    } catch (err) {
      error.value = err.message || 'Failed to fetch bookings'
      return []
    } finally {
      loading.value = false
    }
  }

  async function getProperty(id) {
    loading.value = true
    error.value = null
    
    try {
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 400))
      
      const property = properties.value.find(p => p.id === id)
      
      if (!property) {
        throw new Error('Property not found')
      }
      
      return property
    } catch (err) {
      error.value = err.message || 'Failed to fetch property'
      return null
    } finally {
      loading.value = false
    }
  }

  async function createProperty(propertyData) {
    loading.value = true
    error.value = null
    
    try {
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const newProperty = {
        ...propertyData,
        id: 'prop_' + Date.now(),
        ownerId: 'user_123', // Current user ID in a real app
        status: 'active',
        rating: 0,
        reviewCount: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
      
      // Add to local state
      properties.value.push(newProperty)
      
      return newProperty
    } catch (err) {
      error.value = err.message || 'Failed to create property'
      return null
    } finally {
      loading.value = false
    }
  }

  async function updateProperty(id, propertyData) {
    loading.value = true
    error.value = null
    
    try {
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 800))
      
      const index = properties.value.findIndex(p => p.id === id)
      
      if (index === -1) {
        throw new Error('Property not found')
      }
      
      // Update property
      const updatedProperty = {
        ...properties.value[index],
        ...propertyData,
        updatedAt: new Date().toISOString()
      }
      
      properties.value[index] = updatedProperty
      
      return updatedProperty
    } catch (err) {
      error.value = err.message || 'Failed to update property'
      return null
    } finally {
      loading.value = false
    }
  }

  async function deleteProperty(id) {
    loading.value = true
    error.value = null
    
    try {
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 600))
      
      const index = properties.value.findIndex(p => p.id === id)
      
      if (index === -1) {
        throw new Error('Property not found')
      }
      
      // Remove from local state
      properties.value.splice(index, 1)
      
      return true
    } catch (err) {
      error.value = err.message || 'Failed to delete property'
      return false
    } finally {
      loading.value = false
    }
  }

  async function createBooking(bookingData) {
    loading.value = true
    error.value = null
    
    try {
      // In a real app, this would be an API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      const property = properties.value.find(p => p.id === bookingData.propertyId)
      
      if (!property) {
        throw new Error('Property not found')
      }
      
      // Create new booking
      const newBooking = {
        ...bookingData,
        id: 'book_' + Date.now(),
        propertyName: property.name,
        status: 'confirmed',
        paymentStatus: 'paid',
        createdAt: new Date().toISOString()
      }
      
      // Add to local state
      bookings.value.push(newBooking)
      
      // Update property availability
      const propertyIndex = properties.value.findIndex(p => p.id === bookingData.propertyId)
      properties.value[propertyIndex].availability.booked.push({
        start: bookingData.checkIn,
        end: bookingData.checkOut
      })
      
      return newBooking
    } catch (err) {
      error.value = err.message || 'Failed to create booking'
      return null
    } finally {
      loading.value = false
    }
  }

  function updateFilters(newFilters) {
    filters.value = { ...filters.value, ...newFilters }
  }

  function resetFilters() {
    filters.value = {
      location: '',
      type: '',
      guests: 1,
      priceMin: 0,
      priceMax: 1000,
      amenities: [],
      dates: {
        checkIn: null,
        checkOut: null
      }
    }
  }

  return {
    properties,
    bookings,
    loading,
    error,
    filters,
    ownedProperties,
    filteredProperties,
    propertyBookings,
    fetchProperties,
    fetchBookings,
    getProperty,
    createProperty,
    updateProperty,
    deleteProperty,
    createBooking,
    updateFilters,
    resetFilters
  }
})