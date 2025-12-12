<script setup>
import { Cloud, Server, Smartphone } from 'lucide-vue-next'

defineProps(['isScrolled'])

const services = [
  {
    title: 'Web Hosting',
    desc: 'Hosting super cepat, aman, dan stabil dengan jaminan uptime 99.9% untuk performa maksimal website bisnis Anda.',
    icon: Cloud
  },
  {
    title: 'VPS Hosting',
    desc: 'Kontrol penuh (Root Access) dengan performa tinggi dan resource dedicated untuk kebutuhan infrastruktur server yang kompleks.',
    icon: Server
  },
  {
    title: 'Web & Mobile App',
    desc: 'Jasa pembuatan website responsif dan aplikasi mobile (Android/iOS).',
    icon: Smartphone
  }
]
</script>

<template>
  <section id="services" class="py-16 md:py-24 transition-colors duration-1000"
           :class="isScrolled ? 'bg-slate-100' : 'bg-dark-800/50'">
    <div class="container mx-auto px-6">
      
      <div v-motion
           :initial="{ opacity: 0, y: 50 }"
           :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
           class="text-center max-w-2xl mx-auto mb-12 md:mb-16">
        <h2 class="text-primary font-semibold tracking-wider uppercase mb-2 text-sm md:text-base">Layanan Kami</h2>
        <h3 class="text-3xl md:text-4xl font-bold mb-4">Solusi Infrastruktur & Digital</h3>
         <p class="text-sm md:text-base leading-relaxed transition-colors duration-500"
           :class="isScrolled ? 'text-slate-500' : 'text-gray-400'">
           Dari infrastruktur server yang handal hingga pengembangan aplikasi presisi untuk mengakselerasi bisnis Anda.
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-6 md:gap-8">
        <div v-for="(service, index) in services" :key="index"
             v-motion
             :initial="{ opacity: 0, y: 100 }"
             :visible="{ opacity: 1, y: 0, transition: { duration: 800, delay: index * 200 } }"
             :class="[
               'p-6 md:p-8 group transition-all duration-300 hover:-translate-y-2 border rounded-2xl hover:shadow-2xl cursor-default',
               isScrolled 
                  ? 'bg-white border-slate-100 shadow-sm hover:shadow-slate-200' 
                  : 'glass-card hover:bg-white/10 hover:border-primary/30'
             ]">
          
          <div :class="[
            'w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 border shadow-sm',
            isScrolled ? 'bg-slate-50 border-slate-100 text-primary' : 'bg-dark-900 border-white/10 text-primary'
          ]">
            <component :is="service.icon" class="w-7 h-7" stroke-width="1.5" />
          </div>

          <h4 class="text-lg md:text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
            {{ service.title }}
          </h4>
          
          <p class="text-sm leading-relaxed transition-colors duration-500"
             :class="isScrolled ? 'text-slate-500' : 'text-gray-400'">
             {{ service.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.glass-card {
  @apply bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl;
}
</style>