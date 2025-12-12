<script setup>
import { CheckCircle2 } from 'lucide-vue-next'
defineProps(['isScrolled'])
</script>

<template>
  <section id="about" class="py-16 md:py-24 relative overflow-hidden">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        
        <div v-motion-slide-visible-left :duration="700"
             class="md:w-1/2 relative">
           <div class="absolute inset-0 bg-primary translate-x-4 translate-y-4 rounded-2xl hidden md:block"></div>
           <!-- <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team" class="relative rounded-2xl shadow-xl md:shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 w-full object-cover h-[300px] md:h-[400px]"> -->
            <img src="/Server.jpg" alt="Team" class="relative rounded-2xl shadow-xl md:shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 w-full object-cover h-[300px] md:h-[400px]">
        </div>
        
        <div v-motion-slide-visible-right :duration="700" :delay="200"
             class="md:w-1/2 text-center md:text-left">
          <h2 class="text-primary font-semibold tracking-wider uppercase mb-2 text-sm md:text-base">Tentang Kami</h2>
          <h3 class="text-3xl md:text-4xl font-bold mb-6">Solusi Teknologi Cerdas</h3>
          <p class="mb-6 leading-relaxed transition-colors duration-500"
             :class="isScrolled ? 'text-slate-600' : 'text-gray-400'">
            Kami adalah penyedia solusi digital lengkap, berfokus membantu bisnis Anda tampil dan beroperasi optimal di dunia online. Mulai dari hosting web dan VPS berperforma tinggi, hingga pembuatan website dan aplikasi mobile yang modern.
          </p>
          <ul class="space-y-4">
            <li class="flex items-center justify-center md:justify-start gap-3" :class="isScrolled ? 'text-slate-700' : 'text-gray-300'"><CheckCircle2 class="text-primary" /> Web Hosting & VPS.</li>
            <li class="flex items-center justify-center md:justify-start gap-3" :class="isScrolled ? 'text-slate-700' : 'text-gray-300'"><CheckCircle2 class="text-primary" /> Pembuatan Website.</li>
            <li class="flex items-center justify-center md:justify-start gap-3" :class="isScrolled ? 'text-slate-700' : 'text-gray-300'"><CheckCircle2 class="text-primary" /> Aplikasi Mobile.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>