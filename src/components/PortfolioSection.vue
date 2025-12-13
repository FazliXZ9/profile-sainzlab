<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-vue-next'

const props = defineProps({
  isScrolled: Boolean,
  dataPortfolios: {
    type: Array,
    default: () => []
  }
})

const currentPage = ref(1)
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1200)

const handleResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const itemsPerPage = computed(() => {
  return windowWidth.value < 768 ? 3 : 6
})

const totalPages = computed(() => Math.ceil(props.dataPortfolios.length / itemsPerPage.value))

const paginatedPortfolios = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
 
  return props.dataPortfolios.slice(start, end)
})

const nextPage = () => { if (currentPage.value < totalPages.value) currentPage.value++ }
const prevPage = () => { if (currentPage.value > 1) currentPage.value-- }
const goToPage = (page) => { currentPage.value = page }
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
            <h3 class="text-3xl md:text-4xl font-bold transition-colors"
                :class="isScrolled ? 'text-slate-900' : 'text-white'">
                Karya Terbaru
            </h3>
            <p class="mt-4 text-sm md:text-base max-w-xl transition-colors duration-500"
               :class="isScrolled ? 'text-slate-500' : 'text-gray-400'">
               Temukan bagaimana kami mengubah ide anda menjadi kenyataan.
            </p>
         </div>
         
         <a href="mailto:muhammadfazli@sainzlab.my.id" class="hidden md:flex items-center gap-2 font-semibold transition-colors group"
            :class="isScrolled ? 'text-slate-900 hover:text-primary' : 'text-white hover:text-primary'">
            Konsultasi <ArrowRight :size="18" class="group-hover:translate-x-1 transition-transform"/>
         </a>
      </div>
      
      <div class="grid md:grid-cols-3 gap-6 md:gap-8 min-h-[400px]">
         <a v-for="(item, index) in paginatedPortfolios" :key="item.id"
            :href="item.link" 
            target="_blank"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
            class="group relative block rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full">
          
          <img :src="item.image" :alt="item.title" 
               class="w-full h-[250px] md:h-[300px] object-cover transition-transform duration-700 group-hover:scale-110">
          
          <div class="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent 
                      opacity-100 md:opacity-0 md:group-hover:opacity-100 
                      transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
            
            <span class="text-primary text-sm font-semibold mb-2 
                         translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 
                         transition-transform duration-300 delay-75">
              {{ item.category }}
            </span>
            
            <h4 class="text-xl md:text-2xl font-bold flex items-center gap-2 text-white 
                       translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 
                       transition-transform duration-300">
              {{ item.title }} <ExternalLink :size="18" />
            </h4>
          </div>

        </a>
      </div>

      <div v-if="totalPages > 1" class="flex justify-center items-center mt-12 gap-3">
        <button @click="prevPage" 
                :disabled="currentPage === 1"
                class="w-10 h-10 rounded-full flex items-center justify-center border transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                :class="isScrolled 
                  ? 'border-slate-200 text-slate-600 hover:bg-slate-100' 
                  : 'border-white/10 text-white hover:bg-white/10'">
          <ChevronLeft :size="20" />
        </button>

        <button v-for="page in totalPages" :key="page"
                @click="goToPage(page)"
                class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all"
                :class="currentPage === page 
                  ? 'bg-primary text-dark-900 shadow-lg scale-110' 
                  : isScrolled ? 'text-slate-600 hover:bg-slate-100' : 'text-gray-400 hover:bg-white/10'">
          {{ page }}
        </button>

        <button @click="nextPage" 
                :disabled="currentPage === totalPages"
                class="w-10 h-10 rounded-full flex items-center justify-center border transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                :class="isScrolled 
                  ? 'border-slate-200 text-slate-600 hover:bg-slate-100' 
                  : 'border-white/10 text-white hover:bg-white/10'">
          <ChevronRight :size="20" />
        </button>
      </div>

    </div>
  </section>
</template>