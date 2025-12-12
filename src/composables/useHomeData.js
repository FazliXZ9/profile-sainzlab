// src/composables/useHomeData.js
import { ref } from 'vue'
import axios from 'axios'

const services = ref([])
const portfolios = ref([])
const faqs = ref([])
const isLoading = ref(true)
const error = ref(null)

export function useHomeData() {
  
  const fetchData = async () => {
    isLoading.value = true
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/home-content')
      
      if (response.data.status === 'success') {
        services.value = response.data.data.services
        portfolios.value = response.data.data.portfolios
        faqs.value = response.data.data.faqs
      }
    } catch (err) {
      console.error("Gagal mengambil data:", err)
      error.value = err
      
    } finally {
      isLoading.value = false
    }
  }

  return {
    services,
    portfolios,
    faqs,
    isLoading,
    error,
    fetchData
  }
}