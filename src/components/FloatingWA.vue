<script setup>
import { Mail } from 'lucide-vue-next'
</script>

<template>
  <a href="mailto:hello@sainzlab.com?subject=Halo%20Sainzlab&body=Saya%20tertarik%20dengan%20layanan%20Anda." 
     class="fixed bottom-6 right-6 z-50 group">
    
    <div class="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-800 text-xs font-bold py-1.5 px-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
      Kirim Email
      <div class="absolute right-[-4px] top-1/2 -translate-y-1/2 border-y-4 border-y-transparent border-l-4 border-l-white"></div>
    </div>

    <div class="relative w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300">
      
      <span class="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping"></span>
      
      <Mail :size="28" class="text-dark-900 relative z-10" />
    </div>
  </a>
</template>