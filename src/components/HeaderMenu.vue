<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const navigateTo = (routeName) => {
  router.push({name: routeName});
}
</script>

<template>
  <header class="sticky top-0 flex items-center h-[64px] justify-between p-10 bg-[#F9F9FC]">
      <div class="flex items-center">
        <router-link to="home" class="font-header text-5xl">Giacomo Zoet</router-link>
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
