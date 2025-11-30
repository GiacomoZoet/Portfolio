<script setup>
import { onMounted, ref } from 'vue'

const isLoaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true
  }, 100)
})
</script>

<template>
  <div class="w-screen content-height flex items-center justify-center overflow-hidden bg-[#F9F9FC]">
    <div class="flex flex-col justify-center max-w-3xl px-8 text-left">
      <p
        class="text-[15px] font-bold transition-all duration-700 ease-out"
        :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        style="transition-delay: 0.1s"
      >
        Hi Im Giacomo Zoet & your go-to
      </p>

      <h1
        class="font-extrabold text-5xl transition-all duration-700 ease-out"
        :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        style="transition-delay: 0.2s"
      >
        Web Developer
      </h1>

      <p
        class="text-[20px] transition-all duration-700 ease-out"
        :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        style="transition-delay: 0.3s"
      >
        I'm a passionate digital creator focused on building clean, human-centered experiences on the web. I love blending design and technology to turn ideas into engaging, accessible products. Always exploring new tools, new trends, and better ways to communicate visually.
      </p>

      <div
        class="flex gap-8 text-2xl transition-all duration-700 ease-out"
        :class="isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        style="transition-delay: 0.4s"
      >
        <a href="https://www.instagram.com/giacomozoet" target="_blank">
          <font-awesome-icon icon="fa-brands fa-instagram"></font-awesome-icon>
        </a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank">
          <font-awesome-icon icon="fa-brands fa-linkedin"></font-awesome-icon>
        </a>
        <a href="https://github.com/GiacomoZoet" target="_blank">
          <font-awesome-icon icon="fa-brands fa-github"></font-awesome-icon>
        </a>
      </div>
    </div>
  </div>
  <div class="flex content-height"></div>
</template>
