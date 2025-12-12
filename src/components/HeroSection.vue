<script setup>
import { ArrowRight, Box } from 'lucide-vue-next'

defineProps(['isScrolled'])
</script>

<template>
  <section id="home" class="container mx-auto px-6 pt-32 pb-16 md:pt-48 flex flex-col md:flex-row items-center min-h-[90vh]">
    <div class="md:w-1/2 mb-12 md:mb-0 relative text-center md:text-left">
      <div v-motion-slide-visible-up :duration="500" :delay="100"
           :class="[
        'inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold mb-6 transition-colors duration-500',
        isScrolled ? 'bg-slate-100 border-slate-200 text-primary' : 'bg-white/5 border-white/10 text-primary'
      ]">
        <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        Available for projects
      </div>

      <h1 v-motion-slide-visible-up :duration="600" :delay="200"
          class="text-4xl md:text-7xl font-bold leading-tight mb-6">
        Inovasi Masa Depan <br class="hidden md:block" /> Bersama <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-500">Sainzlab</span>
      </h1>
      
      <p v-motion-slide-visible-up :duration="600" :delay="300"
         class="text-base md:text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed transition-colors duration-500"
         :class="isScrolled ? 'text-slate-600' : 'text-gray-400'">
        Mitra teknologi strategis Anda. Mengubah ide kompleks menjadi solusi digital yang elegan.
      </p>
      
      <div v-motion-slide-visible-up :duration="600" :delay="400"
           class="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
         
         <a href="mailto:hello@sainzlab.com?subject=Konsultasi%20Proyek&body=Halo%20Tim%20Sainzlab,%20saya%20ingin%20berkonsultasi%20mengenai%20proyek..."
            :class="[
           'flex items-center justify-center font-bold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg active:scale-95 cursor-pointer',
           isScrolled ? 'bg-slate-900 text-white hover:bg-slate-700' : 'bg-white text-dark-900 hover:bg-gray-200'
         ]">
           Konsultasi
         </a>

         <a href="#portfolio" 
            :class="[
           'flex items-center justify-center gap-2 px-8 py-3 rounded-full border transition-all duration-300 hover:shadow-lg active:scale-95 cursor-pointer',
           isScrolled ? 'border-slate-300 hover:bg-slate-100 text-slate-900' : 'border-white/20 hover:bg-white/5'
         ]">
           Lihat Portfolio <ArrowRight :size="18"/>
         </a>

      </div>
    </div>

    <div v-motion-fade-visible :duration="1000" :delay="300"
         class="hidden md:flex md:w-1/2 relative h-[300px] md:h-[400px] w-full items-center justify-center perspective-1000">
      
      <div class="relative w-48 h-48 md:w-64 md:h-64 bg-gradient-to-tr from-primary to-yellow-600 transform rotate-45 rounded-3xl shadow-[0_20px_50px_rgba(255,193,7,0.2)] border-t border-white/30 z-10 animate-float">
        <div class="absolute inset-0 bg-black/10 backdrop-blur-sm rounded-3xl"></div>
        <div class="absolute inset-6 md:inset-8 border-4 border-white/20 rounded-xl flex items-center justify-center">
           <Box class="text-white/50 w-12 h-12 md:w-16 md:h-16" />
        </div>
      </div>

      <div class="absolute top-4 right-10 md:top-10 md:right-20 p-2 md:p-3 animate-float-delayed rounded-xl glass-card"
           :class="isScrolled ? 'bg-white shadow-lg border-slate-100' : ''">
        <div class="w-4 h-4 md:w-6 md:h-6 bg-primary rounded rotate-45"></div>
      </div>
      <div class="absolute bottom-10 left-4 md:bottom-20 md:left-10 px-3 py-1 md:px-4 md:py-2 animate-float rounded-xl glass-card"
           :class="isScrolled ? 'bg-white shadow-lg border-slate-100' : ''">
        <div class="flex gap-2 items-center">
           <div class="w-2 h-2 rounded-full bg-green-400"></div>
           <span class="text-[10px] md:text-xs font-mono" :class="isScrolled ? 'text-slate-500' : 'text-gray-300'">System Stable</span>
        </div>
      </div>
    </div>
  </section>
</template>
    
<style scoped>
.glass-card {
  @apply bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl;
}
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(45deg); }
  50% { transform: translateY(-20px) rotate(48deg); }
}
@keyframes floatSimple {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}
.animate-float { animation: float 6s ease-in-out infinite; }
.animate-float-delayed { animation: floatSimple 7s ease-in-out infinite; animation-delay: 2s; }
</style>