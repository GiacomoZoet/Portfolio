<script setup>
const props = defineProps({
  driver: Object
})

</script>

<template>
  <div class="driverCard">
    <div>
      <h1 class="text-2xl text-">{{props.driver.full_name}}</h1>
      <p>{{props.driver.country_code}}</p>
      <img :src="props.driver.headshot_url" alt="Driver Headshot" />
      <p>{{props.driver.team_name}}</p>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.driverCard
  display: flex
  div
    display: flex
    gap: 1rem
    background-color: #dddddd
    border-radius: 1rem
    height: 450px
    width: 250px
    flex-direction: column
    padding: 2rem
</style>
