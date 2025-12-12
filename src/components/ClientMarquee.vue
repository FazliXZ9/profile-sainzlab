<script setup>
defineProps(['isScrolled'])

const clients = [
  { 
    name: 'Vue.js', 
    logo: 'https://cdn.worldvectorlogo.com/logos/vue-9.svg', 
    link: 'https://vuejs.org/' 
  },
  { 
    name: 'Tailwind CSS', 
    logo: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg', 
    link: 'https://tailwindcss.com/' 
  },
  { 
    name: 'Laravel', 
    logo: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg', 
    link: 'https://laravel.com/' 
  },
  { 
    name: 'Docker', 
    logo: 'https://cdn.worldvectorlogo.com/logos/docker.svg', 
    link: 'https://docs.docker.com/' 
  },
  { 
    name: 'Google Cloud', 
    logo: 'https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg', 
    link: 'https://cloud.google.com/' 
  },
  { 
    name: 'Flutter', 
    logo: 'https://cdn.worldvectorlogo.com/logos/flutter.svg', 
    link: 'https://flutter.dev/' 
  },
  { 
    name: 'Proxmox', 
    logo: 'https://cdn.worldvectorlogo.com/logos/proxmox.svg', 
    link: 'https://proxmox.com/' 
  },
  { 
    name: 'Linux', 
    logo: 'https://cdn.worldvectorlogo.com/logos/linux-tux.svg', 
    link: 'https://www.kernel.org/' 
  },
  { 
    name: 'MikroTik', 
    logo: 'https://cdn.worldvectorlogo.com/logos/mikrotik.svg', 
    link: 'https://mikrotik.com/documentation' 
  },

  // --- DUPLIKASI (Agar animasi seamless) ---
  { name: 'Vue.js', logo: 'https://cdn.worldvectorlogo.com/logos/vue-9.svg', link: 'https://vuejs.org/' },
  { name: 'Tailwind CSS', logo: 'https://cdn.worldvectorlogo.com/logos/tailwindcss.svg', link: 'https://tailwindcss.com/' },
  { name: 'Laravel', logo: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg', link: 'https://laravel.com/' },
  { name: 'Docker', logo: 'https://cdn.worldvectorlogo.com/logos/docker.svg', link: 'https://docs.docker.com/' },
  { name: 'Google Cloud', logo: 'https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg', link: 'https://cloud.google.com/' },
  { name: 'Flutter', logo: 'https://cdn.worldvectorlogo.com/logos/flutter.svg', link: 'https://flutter.dev/' },
  { name: 'Proxmox', logo: 'https://cdn.worldvectorlogo.com/logos/proxmox.svg', link: 'https://proxmox.com/' },
  { name: 'Linux', logo: 'https://cdn.worldvectorlogo.com/logos/linux-tux.svg', link: 'https://www.kernel.org/' },
  { name: 'MikroTik', logo: 'https://cdn.worldvectorlogo.com/logos/mikrotik.svg', link: 'https://mikrotik.com/' },
]
</script>

<template>
  <section class="py-10 border-b transition-colors duration-1000"
           :class="isScrolled ? 'bg-white border-slate-100' : 'bg-dark-900 border-white/5'">
    <div class="container mx-auto px-6 mb-6 text-center">
      <p class="text-sm font-semibold tracking-widest uppercase opacity-50"
         :class="isScrolled ? 'text-slate-500' : 'text-gray-400'">
         Teknologi Terdepan
      </p>
    </div>

    <div class="relative flex overflow-hidden group">
      <div class="absolute top-0 left-0 w-20 h-full z-10 bg-gradient-to-r"
           :class="isScrolled ? 'from-white to-transparent' : 'from-dark-900 to-transparent'"></div>
      <div class="absolute top-0 right-0 w-20 h-full z-10 bg-gradient-to-l"
           :class="isScrolled ? 'from-white to-transparent' : 'from-dark-900 to-transparent'"></div>

      <div class="flex gap-12 animate-marquee whitespace-nowrap py-4">
        
        <a v-for="(client, index) in clients" 
           :key="index" 
           :href="client.link" 
           target="_blank" 
           rel="noopener noreferrer"
           class="w-32 flex items-center justify-center transition-transform hover:scale-110"
           :title="client.name">
           
          <img :src="client.logo" :alt="client.name" 
               class="h-10 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
        </a>

      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-marquee {
  animation: marquee 20s linear infinite; 
}
.group:hover .animate-marquee {
  animation-play-state: paused; 
}
</style>