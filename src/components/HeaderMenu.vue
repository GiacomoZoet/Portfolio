<script setup>

</script>

<template>
  <header class="sticky top-0 flex items-center h-[64px] bg-[#ffffff]/90 w-full backdrop-blur-[1px] justify-between p-10 border border-gray-500/5 rounded-sm ">
      <div class="flex items-center">
        <router-link to="/" class="font-header text-5xl">Giacomo Zoet</router-link>
      </div>
      <nav >
        <ul class="flex items-center w-60 justify-between">
          <li><router-link to="/">HOME</router-link></li>
          <li><router-link to="/f1">F1 DATA</router-link></li>
          <li><router-link to="/contact">CONTACT</router-link></li>
        </ul>
      </nav>
  </header>
</template>

<style>
@import "tailwindcss";
</style>
