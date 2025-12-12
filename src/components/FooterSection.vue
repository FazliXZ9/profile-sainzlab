<script setup>
import { Github, Instagram, Linkedin } from 'lucide-vue-next'
defineProps(['isScrolled'])
</script>

<template>
  <footer class="border-t pt-16 pb-8 transition-colors duration-1000 relative z-10"
          :class="isScrolled ? 'bg-white border-slate-200' : 'bg-dark-900 border-white/10'">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
        <div class="md:w-1/3">
          <img src="/logo-miring.png" alt="Sainzlab" 
               class="h-8 w-auto mb-4 grayscale hover:grayscale-0 transition-all duration-500"
               :class="isScrolled ? 'brightness-0' : ''">
          <p class="text-sm leading-relaxed transition-colors duration-500"
             :class="isScrolled ? 'text-slate-500' : 'text-gray-500'">
            Membangun solusi digital masa depan dengan teknologi terkini.
          </p>
        </div>
        <div class="flex gap-4">
           <a href="#" :class="isScrolled ? 'border-slate-200 text-slate-400 hover:bg-slate-100' : 'border-white/10 text-gray-400 hover:bg-white hover:text-dark-900'" class="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:scale-110 active:scale-95"><Github :size="20"/></a>
           <a href="#" :class="isScrolled ? 'border-slate-200 text-slate-400 hover:bg-slate-100' : 'border-white/10 text-gray-400 hover:bg-white hover:text-dark-900'" class="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:scale-110 active:scale-95"><Instagram :size="20"/></a>
           <a href="#" :class="isScrolled ? 'border-slate-200 text-slate-400 hover:bg-slate-100' : 'border-white/10 text-gray-400 hover:bg-white hover:text-dark-900'" class="w-10 h-10 rounded-full border flex items-center justify-center transition-all hover:scale-110 active:scale-95"><Linkedin :size="20"/></a>
        </div>
      </div>
      <div class="text-center text-sm border-t pt-8 transition-colors duration-500"
           :class="isScrolled ? 'text-slate-500 border-slate-200' : 'text-gray-600 border-white/5'">
        &copy; 2025 Sainzlab. All rights reserved.
      </div>
    </div>
  </footer>
</template>