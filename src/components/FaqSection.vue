<script setup>
import { ref, defineProps } from 'vue'
import { Plus, Minus } from 'lucide-vue-next'

const props = defineProps({
  isScrolled: Boolean,
  dataFaqs: {
    type: Array,
    default: () => []
  }
})

const openIndex = ref(null)

const toggleFaq = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section class="py-16 md:py-24 transition-colors duration-1000"
           :class="isScrolled ? 'bg-slate-50' : 'bg-dark-900'">
    <div class="container mx-auto px-6 max-w-3xl">
      
      <div v-motion
           :initial="{ opacity: 0, y: 30 }"
           :visible="{ opacity: 1, y: 0, transition: { duration: 600 } }"
           class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4" :class="isScrolled ? 'text-slate-900' : 'text-white'">
          Sering Ditanyakan
        </h2>
        <p :class="isScrolled ? 'text-slate-500' : 'text-gray-400'">
          Jawaban untuk pertanyaan umum seputar layanan kami.
        </p>
      </div>

      <div class="space-y-4">
        <div v-for="(faq, index) in dataFaqs" :key="faq.id || index"
             v-motion
             :initial="{ opacity: 0, y: 20 }"
             :visible="{ opacity: 1, y: 0, transition: { duration: 500, delay: index * 100 } }"
             class="border rounded-2xl overflow-hidden transition-all duration-300"
             :class="[
               isScrolled ? 'border-slate-200 bg-white' : 'border-white/10 bg-white/5',
               openIndex === index ? 'shadow-lg ring-1 ring-primary/50' : ''
             ]">
          
          <button @click="toggleFaq(index)"
                  class="w-full flex justify-between items-center p-6 text-left focus:outline-none cursor-pointer group">
            <span class="font-bold text-lg transition-colors pr-4" 
                  :class="[
                    isScrolled ? 'text-slate-800' : 'text-white',
                    openIndex === index ? 'text-primary' : ''
                  ]">
              {{ faq.question }}
            </span>
            
            <span class="p-2 rounded-full transition-all duration-500 transform flex-shrink-0"
                  :class="[
                    openIndex === index 
                      ? 'bg-primary text-dark-900 rotate-180' 
                      : (isScrolled ? 'bg-slate-100 text-slate-600 group-hover:bg-slate-200' : 'bg-white/10 text-white group-hover:bg-white/20')
                  ]">
               <div class="relative w-5 h-5 flex items-center justify-center">
                 <Minus class="absolute transition-opacity duration-300" 
                        :class="openIndex === index ? 'opacity-100' : 'opacity-0'" :size="20" />
                 <Plus class="absolute transition-opacity duration-300" 
                       :class="openIndex === index ? 'opacity-0' : 'opacity-100'" :size="20" />
               </div>
            </span>
          </button>

          <div class="grid transition-[grid-template-rows] duration-500 ease-in-out"
               :class="openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'">
            
            <div class="overflow-hidden">
               <div class="px-6 pb-6 text-sm md:text-base leading-relaxed opacity-90"
                    :class="isScrolled ? 'text-slate-600' : 'text-gray-300'">
                 <div class="pt-2 border-t border-dashed border-opacity-20"
                      :class="isScrolled ? 'border-slate-300' : 'border-white'">
                   <div class="mt-4">
                     {{ faq.answer }}
                   </div>
                 </div>
               </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  </section>
</template>