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
  <div class="w-screen content-height flex items-center justify-center flex-col overflow-hidden bg-white relative">
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
  <div class="flex items-center justify-center bg-white pb-5 font-bold text-2xl">
    <a href="#downpart" class="scroll-smooth"><font-awesome-icon icon="fa-solid fa-arrow-down"></font-awesome-icon></a>
  </div>
  <div id="downpart" class="flex h-180 bg-[#F9F9FC] w-screen items-center justify-center">
    <div class="rounded  flex justify-center items-center w-4/5 h-4/5 ">
      <div class="">
        <h1 class="font-bold text-4xl text-center"><br></br></h1>
        <p class="text-[20px] font-light text-left w-100"><br>
        </p>
      </div>
      <img src="../assets/generated-image-removebg-preview.png" alt="" class="flex w-100">

    </div>
  </div>
  <footer class="flex justify-center items-center h-15">
    <p class="text-gray-400">© 2026 Giacomo Zoet</p>
  </footer>
</template>
