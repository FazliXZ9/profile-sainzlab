<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { 
  ArrowRight, Brain, BarChart3, Code2, 
  CheckCircle2, ExternalLink, Github, Instagram, Linkedin, Box,
  Menu, X
} from 'lucide-vue-next'

const navLinks = ['Home', 'About', 'Services', 'Portfolio']
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const services = [
  {
    title: 'AI & Machine Learning',
    desc: 'Implementasi solusi cerdas untuk otomasi dan prediksi bisnis masa depan.',
    icon: Brain
  },
  {
    title: 'Data Analytics',
    desc: 'Ubah data mentah menjadi wawasan berharga untuk pengambilan keputusan strategis.',
    icon: BarChart3
  },
  {
    title: 'Software Development',
    desc: 'Pengembangan aplikasi web dan mobile yang skalabel dengan teknologi terbaru.',
    icon: Code2
  }
]

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
  <div class="relative min-h-screen font-sans selection:bg-primary selection:text-black overflow-x-hidden transition-colors duration-700 ease-in-out"
       :class="isScrolled ? 'bg-slate-50 text-slate-900' : 'bg-dark-900 text-white'">
    
    <div class="fixed inset-0 overflow-hidden pointer-events-none transition-opacity duration-700 z-0"
         :class="isScrolled ? 'opacity-0' : 'opacity-100'">
       <div class="absolute top-[-10%] left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-900/20 rounded-full blur-[80px] md:blur-[120px]"></div>
       <div class="absolute bottom-[-10%] right-[-10%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary/5 rounded-full blur-[80px] md:blur-[120px]"></div>
    </div>

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

        <button @click="isMobileMenuOpen = !isMobileMenuOpen" 
                class="md:hidden relative z-50 p-2 focus:outline-none active:scale-90 transition-transform"
                :class="isScrolled ? 'text-slate-900' : 'text-white'">
          <X v-if="isMobileMenuOpen" :size="28" />
          <Menu v-else :size="28" />
        </button>
      </div>

      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-10"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-10"
      >
        <div v-show="isMobileMenuOpen" 
            class="md:hidden absolute top-0 left-0 w-full h-screen bg-dark-900/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 text-2xl z-40">
          <a v-for="link in navLinks" :key="link" 
            :href="`#${link.toLowerCase()}`" 
            @click="isMobileMenuOpen = false"
            class="text-white hover:text-primary font-bold tracking-wide">
            {{ link }}
          </a>
          <button class="bg-primary text-dark-900 font-bold px-8 py-3 rounded-full mt-4 active:scale-95 transition-transform">
            Hubungi Kami
          </button>
        </div>
      </transition>
    </nav>

    <main class="relative z-10">
      
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
             <button :class="[
               'font-bold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg active:scale-95',
               isScrolled ? 'bg-slate-900 text-white hover:bg-slate-700' : 'bg-white text-dark-900 hover:bg-gray-200'
             ]">
               Mulai Proyek
             </button>
             <button :class="[
               'flex items-center justify-center gap-2 px-8 py-3 rounded-full border transition-all duration-300 hover:shadow-lg active:scale-95',
               isScrolled ? 'border-slate-300 hover:bg-slate-100 text-slate-900' : 'border-white/20 hover:bg-white/5'
             ]">
               Lihat Portfolio <ArrowRight :size="18"/>
             </button>
          </div>
        </div>

        <div v-motion-fade-visible :duration="1000" :delay="300"
             class="md:w-1/2 relative h-[300px] md:h-[400px] w-full flex items-center justify-center perspective-1000">
          <div class="relative w-48 h-48 md:w-64 md:h-64 bg-gradient-to-tr from-primary to-yellow-600 transform rotate-45 rounded-3xl shadow-[0_20px_50px_rgba(255,193,7,0.2)] border-t border-white/30 z-10 animate-float">
            <div class="absolute inset-0 bg-black/10 backdrop-blur-sm rounded-3xl"></div>
            <div class="absolute inset-6 md:inset-8 border-4 border-white/20 rounded-xl flex items-center justify-center">
               <Box class="text-white/50 w-12 h-12 md:w-16 md:h-16" />
            </div>
          </div>

          <div class="absolute top-4 right-10 md:top-10 md:right-20 p-2 md:p-3 animate-float-delayed rounded-xl"
               :class="isScrolled ? 'bg-white shadow-lg border border-slate-100' : 'glass-card'">
            <div class="w-4 h-4 md:w-6 md:h-6 bg-primary rounded rotate-45"></div>
          </div>
          <div class="absolute bottom-10 left-4 md:bottom-20 md:left-10 px-3 py-1 md:px-4 md:py-2 animate-float rounded-xl"
               :class="isScrolled ? 'bg-white shadow-lg border border-slate-100' : 'glass-card'">
            <div class="flex gap-2 items-center">
               <div class="w-2 h-2 rounded-full bg-green-400"></div>
               <span class="text-[10px] md:text-xs font-mono" :class="isScrolled ? 'text-slate-500' : 'text-gray-300'">System Stable</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" class="py-16 md:py-24 relative overflow-hidden">
        <div class="container mx-auto px-6">
          <div class="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            
            <div v-motion-slide-visible-left :duration="700"
                 class="md:w-1/2 relative">
               <div class="absolute inset-0 bg-primary translate-x-4 translate-y-4 rounded-2xl hidden md:block"></div>
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team" class="relative rounded-2xl shadow-xl md:shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 w-full object-cover h-[300px] md:h-[400px]">
            </div>
            
            <div v-motion-slide-visible-right :duration="700" :delay="200"
                 class="md:w-1/2 text-center md:text-left">
              <h2 class="text-primary font-semibold tracking-wider uppercase mb-2 text-sm md:text-base">Tentang Kami</h2>
              <h3 class="text-3xl md:text-4xl font-bold mb-6">Solusi Teknologi Cerdas</h3>
              <p class="mb-6 leading-relaxed transition-colors duration-500"
                 :class="isScrolled ? 'text-slate-600' : 'text-gray-400'">
                Sainzlab adalah studio teknologi modern yang berfokus pada kualitas kode dan pengalaman pengguna.
              </p>
              <ul class="space-y-4">
                <li class="flex items-center justify-center md:justify-start gap-3" :class="isScrolled ? 'text-slate-700' : 'text-gray-300'"><CheckCircle2 class="text-primary" /> Tim Expert IT & Dev.</li>
                <li class="flex items-center justify-center md:justify-start gap-3" :class="isScrolled ? 'text-slate-700' : 'text-gray-300'"><CheckCircle2 class="text-primary" /> UI/UX Modern.</li>
                <li class="flex items-center justify-center md:justify-start gap-3" :class="isScrolled ? 'text-slate-700' : 'text-gray-300'"><CheckCircle2 class="text-primary" /> High Performance Server.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="services" class="py-16 md:py-24 transition-colors duration-1000"
               :class="isScrolled ? 'bg-slate-100' : 'bg-dark-800/50'">
        <div class="container mx-auto px-6">
          <div v-motion-slide-visible-up :duration="600"
               class="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h2 class="text-primary font-semibold tracking-wider uppercase mb-2 text-sm md:text-base">Layanan</h2>
            <h3 class="text-3xl md:text-4xl font-bold mb-4">Layanan Unggulan</h3>
             <p class="text-sm md:text-base leading-relaxed transition-colors duration-500"
               :class="isScrolled ? 'text-slate-500' : 'text-gray-400'">
               Solusi terbaik yang kami tawarkan untuk membantu pertumbuhan bisnis digital Anda.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-6 md:gap-8">
            <div v-for="(service, index) in services" :key="index"
                 v-motion-slide-visible-up
                 :duration="800"
                 :delay="index * 200" 
                 :class="[
                   'p-6 md:p-8 group transition-all duration-300 hover:-translate-y-2 border rounded-2xl hover:shadow-xl',
                   isScrolled 
                      ? 'bg-white border-slate-100 shadow-sm' 
                      : 'glass-card hover:bg-white/10 hover:border-primary/30'
                 ]">
              <div :class="[
                'w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 border',
                isScrolled ? 'bg-slate-50 border-slate-100 text-primary' : 'bg-dark-900 border-white/10 text-primary'
              ]">
                <component :is="service.icon" class="w-6 h-6 md:w-7 md:h-7" />
              </div>
              <h4 class="text-lg md:text-xl font-bold mb-3 group-hover:text-primary transition-colors">{{ service.title }}</h4>
              <p class="text-sm leading-relaxed transition-colors duration-500"
                 :class="isScrolled ? 'text-slate-500' : 'text-gray-400'">
                 {{ service.desc }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" class="py-16 md:py-24">
        <div class="container mx-auto px-6">
          
          <div v-motion-slide-visible-up 
               :duration="600"
               class="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
             <div>
                <h2 class="text-primary font-semibold tracking-wider uppercase mb-2 text-sm md:text-base">Portfolio</h2>
                <h3 class="text-3xl md:text-4xl font-bold">Karya Terbaru</h3>
                <p class="mt-4 text-sm md:text-base max-w-xl transition-colors duration-500"
                   :class="isScrolled ? 'text-slate-500' : 'text-gray-400'">
                   Lihat bagaimana kami membantu klien mencapai tujuan bisnis mereka melalui solusi digital.
                </p>
             </div>
             
             <a href="#" class="hidden md:flex items-center gap-2 font-semibold transition-colors group"
                :class="isScrolled ? 'text-slate-900 hover:text-primary' : 'text-white hover:text-primary'">
                Lihat Semua Proyek <ArrowRight :size="18" class="group-hover:translate-x-1 transition-transform"/>
             </a>
          </div>
          
          <div class="grid md:grid-cols-3 gap-6 md:gap-8">
             
             <div v-for="(item, index) in portfolios" :key="index"
                 v-motion-slide-visible-up
                 :duration="800"
                 :delay="index * 200"
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
    
    </main>

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

  </div>
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

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: floatSimple 7s ease-in-out infinite;
  animation-delay: 2s;
}
</style>