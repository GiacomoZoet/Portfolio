<script setup>

</script>

<template>
  <header class="flex items-center h-20 justify-between p-10">
      <div class="flex items-center">
        <router-link to="/" class="font-header text-5xl">Giacomo Zoet</router-link>
      </div>
      <nav >
        <ul class="flex items-center w-100 justify-between">
          <li><router-link to="/">HOME</router-link></li>
          <li><router-link to="/info">INFO</router-link></li>
          <li><router-link to="/contact">CONTACT</router-link></li>
        </ul>
      </nav>
  </header>
</template>

<style>
@import "tailwindcss";
</style>
