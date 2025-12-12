<script setup>
import { ref } from 'vue'
import { Menu, X, ArrowRight } from 'lucide-vue-next'

defineProps(['isScrolled'])

// UPDATE: Menambahkan 'Katalog' ke dalam array menu
const navLinks = ['Home', 'About', 'Services', 'Katalog', 'Portfolio']
const isMobileMenuOpen = ref(false)
</script>

<template>
  <nav class="fixed w-full top-0 z-50 transition-all duration-500"
       :class="[
         isScrolled ? 'bg-white/90 border-slate-200 shadow-sm' : 'bg-dark-900/80 border-white/5',
         'backdrop-blur-lg border-b'
       ]"
       v-motion-slide-top
       :duration="600"
  >
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      
      <a href="#" class="flex items-center relative z-50">
        <img src="/logo-miring.png" alt="Sainzlab" 
             class="h-8 md:h-10 w-auto object-contain transition-all duration-500"
             :class="isScrolled ? 'brightness-0' : ''">
      </a>

      <div class="hidden md:flex gap-8 text-sm font-medium transition-colors duration-500"
           :class="isScrolled ? 'text-slate-600' : 'text-gray-400'">
        <a v-for="link in navLinks" :key="link" :href="`#${link.toLowerCase()}`" 
           class="hover:text-primary transition-colors">
          {{ link }}
        </a>
      </div>

      <div class="hidden md:block">
        <button class="bg-primary hover:bg-yellow-500 text-dark-900 font-bold px-5 py-2 rounded-full text-sm transition-all shadow-[0_0_15px_rgba(255,193,7,0.4)] hover:shadow-[0_0_25px_rgba(255,193,7,0.6)] active:scale-95">
          Hubungi Kami
        </button>
      </div>

      <button @click="isMobileMenuOpen = true" 
              class="md:hidden relative z-50 p-2 focus:outline-none active:scale-90 transition-transform"
              :class="isScrolled ? 'text-slate-900' : 'text-white'">
        <Menu :size="28" />
      </button>
    </div>
  </nav>

  <Teleport to="body">
    
    <transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isMobileMenuOpen" 
           @click="isMobileMenuOpen = false"
           class="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]">
      </div>
    </transition>

    <transition
      enter-active-class="transition-transform duration-500 cubic-bezier(0.25, 1, 0.5, 1)"
      enter-from-class="translate-x-[120%]" 
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-300 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-[120%]"
    >
      <div v-if="isMobileMenuOpen" 
           class="fixed top-24 right-4 w-[85%] max-w-[320px] rounded-3xl p-6 shadow-2xl border overflow-hidden z-[9999]"
           :class="isScrolled 
              ? 'bg-white/95 border-slate-200 text-slate-800' 
              : 'bg-dark-900/95 border-white/10 text-white backdrop-blur-2xl'"
      >
          <div class="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>

          <div class="flex justify-between items-center mb-6">
             <span class="text-xs font-bold uppercase tracking-widest text-primary/80">Navigasi</span>
             <button @click="isMobileMenuOpen = false" 
                     class="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
               <X :size="24" />
             </button>
          </div>

          <div class="flex flex-col gap-2">
            <a v-for="link in navLinks" :key="link" 
               :href="`#${link.toLowerCase()}`" 
               @click="isMobileMenuOpen = false"
               class="py-3 px-4 rounded-xl text-lg font-bold transition-all flex items-center justify-between group active:scale-95"
               :class="isScrolled 
                  ? 'hover:bg-slate-100' 
                  : 'hover:bg-white/10'"
            >
              <div class="flex items-center gap-3">
                <div class="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div> 
                {{ link }}
              </div>
              <ArrowRight :size="18" class="text-primary opacity-50 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div class="h-px w-full my-6" :class="isScrolled ? 'bg-slate-100' : 'bg-white/10'"></div>

          <button class="w-full bg-primary hover:bg-yellow-500 text-dark-900 font-bold py-3.5 rounded-xl shadow-lg active:scale-95 transition-transform flex justify-center items-center gap-2">
            Hubungi Kami
          </button>
      </div>
    </transition>
  </Teleport>
</template>