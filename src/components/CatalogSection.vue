<script setup>
import { ref, computed, watch, onMounted, onUnmounted, defineProps } from 'vue'
import { ArrowRight, ChevronLeft, ChevronRight, Edit, Box } from 'lucide-vue-next' 

const props = defineProps({
  isScrolled: Boolean,
  dataServices: {
    type: Array,
    default: () => []
  }
})

const ADMIN_URL = 'http://127.0.0.1:8000'

const categories = ['Semua', 'Hosting', 'VPS', 'Website', 'Mobile Apps']
const activeCategory = ref('Semua')

const currentPage = ref(1)
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1200)

const handleResize = () => { windowWidth.value = window.innerWidth }

onMounted(() => { window.addEventListener('resize', handleResize) })
onUnmounted(() => { window.removeEventListener('resize', handleResize) })

const itemsPerPage = computed(() => windowWidth.value < 768 ? 3 : 6)

watch([activeCategory, itemsPerPage], () => { currentPage.value = 1 })

const filteredItems = computed(() => {
  if (activeCategory.value === 'Semua') return props.dataServices
  return props.dataServices.filter(item => item.category === activeCategory.value)
})

const totalPages = computed(() => Math.ceil(filteredItems.value.length / itemsPerPage.value))
const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredItems.value.slice(start, end)
})

const scrollToCatalog = () => {
  const section = document.getElementById('katalog')
  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
const nextPage = () => { if (currentPage.value < totalPages.value) { currentPage.value++; scrollToCatalog() } }
const prevPage = () => { if (currentPage.value > 1) { currentPage.value--; scrollToCatalog() } }
const goToPage = (page) => { currentPage.value = page; scrollToCatalog() }
const setCategory = (cat) => { activeCategory.value = cat }

const generateEmailLink = (item) => {
  const email = "muhammadfazli@sainzlab.my.id"
  const subject = encodeURIComponent(`Tanya Layanan: ${item.title}`)
  const body = encodeURIComponent(`Halo Tim Sainzlab,\n\nSaya tertarik dengan layanan: ${item.title}\nKategori: ${item.category}\n\nMohon info lebih lanjut.`)
  return `mailto:${email}?subject=${subject}&body=${body}`
}
</script>

<template>
  <section id="katalog" class="py-16 md:py-24 transition-colors duration-1000"
           :class="isScrolled ? 'bg-white' : 'bg-dark-900'">
    <div class="container mx-auto px-6">
      
      <div v-motion :initial="{ opacity: 0, y: 30 }" :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
           class="text-center max-w-3xl mx-auto mb-12">
        <h2 class="text-primary font-semibold tracking-wider uppercase mb-2 text-sm md:text-base">Paket & Layanan</h2>
        <h3 class="text-3xl md:text-4xl font-bold mb-4">Pilih Solusi Kebutuhan Anda</h3>
        <p class="hidden md:block text-sm md:text-base leading-relaxed transition-colors duration-500"
           :class="isScrolled ? 'text-slate-500' : 'text-gray-400'">
           Mulai dari hosting personal hingga pembuatan sistem aplikasi perusahaan.
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button v-for="cat in categories" :key="cat" @click="setCategory(cat)"
                class="px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border"
                :class="[activeCategory === cat ? 'bg-primary text-dark-900 border-primary shadow-[0_0_15px_rgba(255,193,7,0.4)]' : isScrolled ? 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200' : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:border-primary/50']">
          {{ cat }}
        </button>
      </div>

      <div class="min-h-[400px]">
        <div v-if="paginatedItems.length === 0" class="text-center py-20 opacity-50">
           <p :class="isScrolled ? 'text-slate-500' : 'text-gray-400'">Belum ada item di kategori ini.</p>
        </div>

        <div v-else class="grid md:grid-cols-3 gap-6 md:gap-8">
          <div v-for="(item, index) in paginatedItems" :key="item.id"
               v-motion :initial="{ opacity: 0, scale: 0.9 }" :visible="{ opacity: 1, scale: 1, transition: { duration: 500, delay: index * 100 } }"
               class="group relative rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-fit"
               :class="isScrolled ? 'bg-white border-slate-100 shadow-sm' : 'bg-white/5 border-white/10'">
            
            <div class="relative h-48 overflow-hidden bg-gray-100">
              
              <template v-if="item.image">
                <img :src="item.image" :alt="item.title" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
              </template>

              <template v-else>
                <div class="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-slate-200 group-hover:to-slate-300 transition-colors duration-500">
                  <div class="mb-2 text-primary opacity-50">
                     <Box :size="32" /> 
                  </div>
                  <span class="font-bold text-lg text-slate-400 text-center leading-tight select-none">
                    {{ item.title }}
                  </span>
                </div>
              </template>
              
              <span class="absolute top-4 right-4 bg-primary text-dark-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
                {{ item.category }}
              </span>

              <a :href="`${ADMIN_URL}/admin/services/${item.id}/edit`" 
                 target="_blank"
                 class="absolute top-4 left-4 bg-white/90 text-slate-700 p-2 rounded-full shadow-lg hover:bg-red-500 hover:text-white transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 translate-y-[-10px] group-hover:translate-y-0"
                 title="Edit di Admin Panel">
                 <Edit :size="16" />
              </a>

            </div>

            <div class="p-6">
              <h4 class="text-lg font-bold mb-2 transition-colors group-hover:text-primary" :class="isScrolled ? 'text-slate-900' : 'text-white'">
                {{ item.title }}
              </h4>
              <p class="text-sm line-clamp-2 mb-4 transition-colors" :class="isScrolled ? 'text-slate-500' : 'text-gray-400'">
                {{ item.desc }}
              </p>
              
              <div class="h-px w-full mb-4" :class="isScrolled ? 'bg-slate-100' : 'bg-white/10'"></div>

              <div class="flex items-center justify-between">
                <span class="text-xs font-semibold px-2 py-1 rounded bg-opacity-20" :class="isScrolled ? 'bg-green-100 text-green-700' : 'bg-green-900 text-green-400'">
                  {{ item.price }}
                </span>
                <a :href="generateEmailLink(item)" class="flex items-center gap-1 text-sm font-bold text-primary hover:gap-2 transition-all">
                  Pesan / Tanya <ArrowRight :size="16" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-if="totalPages > 1" class="flex justify-center items-center mt-12 gap-3">
        <button @click="prevPage" :disabled="currentPage === 1" class="w-10 h-10 rounded-full flex items-center justify-center border transition-all disabled:opacity-50 disabled:cursor-not-allowed" :class="isScrolled ? 'border-slate-200 text-slate-600 hover:bg-slate-100' : 'border-white/10 text-white hover:bg-white/10'"><ChevronLeft :size="20" /></button>
        <button v-for="page in totalPages" :key="page" @click="goToPage(page)" class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all" :class="currentPage === page ? 'bg-primary text-dark-900 shadow-lg scale-110' : isScrolled ? 'text-slate-600 hover:bg-slate-100' : 'text-gray-400 hover:bg-white/10'">{{ page }}</button>
        <button @click="nextPage" :disabled="currentPage === totalPages" class="w-10 h-10 rounded-full flex items-center justify-center border transition-all disabled:opacity-50 disabled:cursor-not-allowed" :class="isScrolled ? 'border-slate-200 text-slate-600 hover:bg-slate-100' : 'border-white/10 text-white hover:bg-white/10'"><ChevronRight :size="20" /></button>
      </div>

    </div>
  </section>
</template>