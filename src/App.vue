<script setup>
import Header from './components/HeaderMenu.vue'
</script>

<template>
  <Header />
  <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Irish+Grover&family=Libre+Barcode+39+Text&family=Libre+Franklin:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Press+Start+2P&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css');
@font-face {
  font-family: 'Pecita';
  src: url('@/assets/fonts/Pecita.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
@import 'tailwindcss';
@theme {
  --font-header: "Pecita", cursive;
  --font-sans: "Nunito", sans-serif;
}

@utility content-height {
  height: calc(100vh - 8px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>

