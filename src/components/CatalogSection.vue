<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-vue-next'

defineProps(['isScrolled'])

const categories = ['Semua', 'Web Apps', 'Mobile Apps', 'Design', 'IoT']
const activeCategory = ref('Semua')

// --- 1. CONFIG RESPONSIVE & PAGINATION ---
const currentPage = ref(1)
const windowWidth = ref(typeof window !== 'undefined' ? window.innerWidth : 1200)

// Deteksi lebar layar
const handleResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize()
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

// Items per page dinamis: 3 di Mobile, 6 di Desktop
const itemsPerPage = computed(() => {
  return windowWidth.value < 768 ? 3 : 6
})

// Reset halaman jika ukuran layar berubah
watch(itemsPerPage, () => {
  currentPage.value = 1
})

const catalogItems = [
  {
    id: 1,
    title: 'Company Profile Website',
    category: 'Web Apps',
    desc: 'Website profesional untuk membangun citra bisnis digital Anda.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 'Mulai Rp 1.5jt'
  },
  {
    id: 2,
    title: 'Aplikasi Kasir (POS)',
    category: 'Web Apps',
    desc: 'Sistem manajemen penjualan lengkap dengan laporan keuangan.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 'Custom'
  },
  {
    id: 3,
    title: 'E-Commerce Mobile App',
    category: 'Mobile Apps',
    desc: 'Aplikasi toko online Android & iOS dengan fitur payment gateway.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 'Custom'
  },
  {
    id: 4,
    title: 'UI/UX Design Kit',
    category: 'Design',
    desc: 'Desain antarmuka aplikasi yang modern, user-friendly, dan siap coding.',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 'Mulai Rp 500rb'
  },
  {
    id: 5,
    title: 'Smart Home System',
    category: 'IoT',
    desc: 'Kontrol perangkat rumah jarak jauh berbasis Internet of Things.',
    image: 'https://images.unsplash.com/photo-1558002038-10917738179d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 'Custom'
  },
  {
    id: 6,
    title: 'Undangan Digital',
    category: 'Web Apps',
    desc: 'Website undangan pernikahan estetik dengan fitur RSVP.',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 'Mulai Rp 300rb'
  },
  {
    id: 7,
    title: 'Sistem Absensi Wajah',
    category: 'IoT',
    desc: 'Sistem absensi karyawan menggunakan AI Face Recognition.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 'Custom'
  },
  {
    id: 8,
    title: 'Landing Page UMKM',
    category: 'Web Apps',
    desc: 'Halaman penawaran khusus untuk meningkatkan konversi penjualan.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    price: 'Mulai Rp 800rb'
  }
]

// --- 2. LOGIKA FILTER & PAGINATION ---

const filteredItems = computed(() => {
  if (activeCategory.value === 'Semua') {
    return catalogItems
  }
  return catalogItems.filter(item => item.category === activeCategory.value)
})

// Menggunakan .value karena itemsPerPage sekarang computed
const totalPages = computed(() => {
  return Math.ceil(filteredItems.value.length / itemsPerPage.value)
})

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return filteredItems.value.slice(start, end)
})

// --- FUNGSI SCROLL OTOMATIS ---
const scrollToCatalog = () => {
  const section = document.getElementById('katalog')
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// --- UPDATE NAVIGASI ---
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
    scrollToCatalog() // Auto scroll
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
    scrollToCatalog() // Auto scroll
  }
}

const goToPage = (page) => {
  currentPage.value = page
  scrollToCatalog() // Auto scroll
}

const setCategory = (cat) => {
  activeCategory.value = cat
  currentPage.value = 1
  // Optional: scrollToCatalog() jika ingin scroll saat ganti kategori
}
</script>

<template>
  <section id="katalog" class="py-16 md:py-24 transition-colors duration-1000"
           :class="isScrolled ? 'bg-white' : 'bg-dark-900'">
    <div class="container mx-auto px-6">
      
      <div v-motion
           :initial="{ opacity: 0, y: 30 }"
           :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
           class="text-center max-w-3xl mx-auto mb-12">
        <h2 class="text-primary font-semibold tracking-wider uppercase mb-2 text-sm md:text-base">Katalog</h2>
        <h3 class="text-3xl md:text-4xl font-bold mb-4">Pilih Solusi Digital Anda</h3>
        <p class="hidden md:block text-sm md:text-base leading-relaxed transition-colors duration-500"
           :class="isScrolled ? 'text-slate-500' : 'text-gray-400'">
           Temukan berbagai layanan siap pakai yang kami tawarkan.
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-3 mb-12">
        <button v-for="cat in categories" :key="cat"
                @click="setCategory(cat)"
                class="px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border"
                :class="[
                  activeCategory === cat 
                    ? 'bg-primary text-dark-900 border-primary shadow-[0_0_15px_rgba(255,193,7,0.4)]' 
                    : isScrolled 
                        ? 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200' 
                        : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:border-primary/50'
                ]">
          {{ cat }}
        </button>
      </div>

      <div class="grid md:grid-cols-3 gap-6 md:gap-8 min-h-[400px]">
        <div v-for="(item, index) in paginatedItems" :key="item.id"
             v-motion
             :initial="{ opacity: 0, scale: 0.9 }"
             :visible="{ opacity: 1, scale: 1, transition: { duration: 500, delay: index * 100 } }"
             class="group relative rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-fit"
             :class="isScrolled ? 'bg-white border-slate-100 shadow-sm' : 'bg-white/5 border-white/10'">
          
          <div class="relative h-48 overflow-hidden">
            <img :src="item.image" :alt="item.title" 
                 class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            <span class="absolute top-4 right-4 bg-primary text-dark-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
              {{ item.category }}
            </span>
          </div>

          <div class="p-6">
            <h4 class="text-lg font-bold mb-2 transition-colors group-hover:text-primary"
                :class="isScrolled ? 'text-slate-900' : 'text-white'">
              {{ item.title }}
            </h4>
            <p class="text-sm line-clamp-2 mb-4 transition-colors"
               :class="isScrolled ? 'text-slate-500' : 'text-gray-400'">
              {{ item.desc }}
            </p>
            
            <div class="h-px w-full mb-4" 
                 :class="isScrolled ? 'bg-slate-100' : 'bg-white/10'"></div>

            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold px-2 py-1 rounded bg-opacity-20"
                    :class="isScrolled ? 'bg-green-100 text-green-700' : 'bg-green-900 text-green-400'">
                {{ item.price }}
              </span>
              <a href="#" class="flex items-center gap-1 text-sm font-bold text-primary hover:gap-2 transition-all">
                Konsultasi <ArrowRight :size="16" />
              </a>
            </div>
          </div>
        </div>
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