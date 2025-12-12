<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useHomeData } from './composables/useHomeData' // 1. Import Composable

// Import Components
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import FooterSection from './components/FooterSection.vue'
import CatalogSection from './components/CatalogSection.vue'
import ClientMarquee from './components/ClientMarquee.vue'
import FaqSection from './components/FaqSection.vue'
import FloatingWA from './components/FloatingWA.vue' 

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const { services, portfolios, faqs, isLoading, fetchData } = useHomeData()

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  fetchData()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="relative min-h-screen font-sans selection:bg-primary selection:text-black overflow-x-hidden transition-colors duration-700 ease-in-out"
       :class="isScrolled ? 'bg-slate-50 text-slate-900' : 'bg-dark-900 text-white'">
    
    <div class="fixed inset-0 overflow-hidden pointer-events-none transition-opacity duration-700 z-0"
         :class="isScrolled ? 'opacity-0' : 'opacity-100'">
       <div class="absolute top-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-900/20 rounded-full blur-[80px] md:blur-[120px]"></div>
       <div class="absolute bottom-[-10%] right-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/5 rounded-full blur-[80px] md:blur-[120px]"></div>
    </div>

    <Navbar :isScrolled="isScrolled" />
    
    <main class="relative z-10">
      <HeroSection :isScrolled="isScrolled" />
      <AboutSection :isScrolled="isScrolled" />
      
      <div v-if="isLoading" class="flex flex-col justify-center items-center py-32 min-h-[50vh]">
         <div class="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
         <p class="text-sm font-semibold tracking-wider animate-pulse opacity-70">Memuat Data...</p>
      </div>

      <div v-else>
        <ServicesSection :isScrolled="isScrolled" :data-services="services" />
        
        <CatalogSection :isScrolled="isScrolled" :data-services="services" />
        
        <PortfolioSection :isScrolled="isScrolled" :data-portfolios="portfolios" />
        
        <ClientMarquee :isScrolled="isScrolled" /> 
        
        <FaqSection :isScrolled="isScrolled" :data-faqs="faqs" />
      </div>
    </main>
    
    <FooterSection :isScrolled="isScrolled" />

    <FloatingWA />

  </div>
</template>