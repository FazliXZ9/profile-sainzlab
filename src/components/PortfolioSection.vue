<script setup>
import { ArrowRight, ExternalLink } from 'lucide-vue-next'
defineProps(['isScrolled'])

const portfolios = [
  {
    title: 'Nura Skincare E-Commerce',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Qibla Finder App',
    category: 'Mobile App (Flutter)',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Finance Dashboard',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
]
</script>

<template>
  <section id="portfolio" class="py-16 md:py-24">
    <div class="container mx-auto px-6">
      
      <div v-motion
           :initial="{ opacity: 0, y: 50 }"
           :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
           class="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
         <div>
            <h2 class="text-primary font-semibold tracking-wider uppercase mb-2 text-sm md:text-base">Portfolio</h2>
            <h3 class="text-3xl md:text-4xl font-bold">Karya Terbaru</h3>
            <p class="mt-4 text-sm md:text-base max-w-xl transition-colors duration-500"
               :class="isScrolled ? 'text-slate-500' : 'text-gray-400'">
               Temukan bagaimana kami mengubah ide anda menjadi kenyataan.
            </p>
         </div>
         
         <a href="mailto:hello@sainzlab.com" class="hidden md:flex items-center gap-2 font-semibold transition-colors group"
            :class="isScrolled ? 'text-slate-900 hover:text-primary' : 'text-white hover:text-primary'">
            Konsultasi <ArrowRight :size="18" class="group-hover:translate-x-1 transition-transform"/>
         </a>
      </div>
      
      <div class="grid md:grid-cols-3 gap-6 md:gap-8">
         <div v-for="(item, index) in portfolios" :key="index"
             v-motion
             :initial="{ opacity: 0, y: 100 }"
             :visible="{ opacity: 1, y: 0, transition: { duration: 800, delay: index * 200 } }"
             class="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
          
          <img :src="item.image" :alt="item.title" 
               class="w-full h-[250px] md:h-[300px] object-cover transition-transform duration-700 group-hover:scale-110">
          
          <div class="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
            <span class="text-primary text-sm font-semibold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{{ item.category }}</span>
            <h4 class="text-xl md:text-2xl font-bold flex items-center gap-2 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              {{ item.title }} <ExternalLink :size="18" />
            </h4>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>