<script setup>
import { ref, onMounted, watch } from 'vue'
import axios from 'axios'
import driverCard from '../components/driverCard.vue'

const meetings = ref([])
const selectedMeetingKey = ref("")
const sessions = ref([])
const selectedSessionKey = ref("")

const emit = defineEmits(["update:meetingKey"])

const allYears = ref([2023, 2024, 2025])
const year = ref("")

const driverNumbers = ref([1, 4, 5, 6, 7, 10, 12, 14, 16, 18, 22, 23, 27, 30, 31, 44, 55, 63, 81, 87])
const drivers = ref([])

onMounted(async () => {
})

watch(year, async (val) => {
  if (!val) return
  const { data } = await axios.get("https://api.openf1.org/v1/meetings", {
    params: { year: val }
  })
  meetings.value = data.sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year
    return a.meeting_name.localeCompare(b.meeting_name)
  })
})

watch(selectedMeetingKey, async (val) => {
  console.log('selectedMeetingKey changed to:', val)
  emit('update:meetingKey', val)
  if (!val) return

  drivers.value = []

  for (const number of driverNumbers.value) {
    try {
      const { data } = await axios.get('https://api.openf1.org/v1/drivers', {
        params: {
          driver_number: number,
          session_key: selectedSessionKey.value
        }
      })
      console.log('driver_number', number, 'got', data.length, 'rows')
      drivers.value.push(...data)
    } catch (e) {
      console.error('error for driver_number', number, e)
    }
  }

  console.log('final drivers length:', drivers.value.length)
  const { data } = await axios.get("https://api.openf1.org/v1/sessions", {
    params: { meeting_key: val }
  })
  sessions.value = data.sort((a, b) =>
    new Date(a.date_start) - new Date(b.date_start)
  )

  selectedSessionKey.value = ""
  drivers.value = []
})

watch(selectedSessionKey, async (val) => {
  emit('update:sessionKey', val)
  if (!val) return

  drivers.value = []

  for (const number of driverNumbers.value) {
    try {
      const { data } = await axios.get('https://api.openf1.org/v1/drivers', {
        params: {
          driver_number: number,
          session_key: val
        }
      })
      if (data.length > 0) {
        drivers.value.push(data[0])
      }
    } catch (e) {
      console.error('error for driver_number', number, e)
    }
  }
})


</script>

<template>
  <div class="flex justify-center items-center h-15 text-gray bg-white h-screen">
    <label>
      Select Year:
      <select v-model="year">
        <option disabled value="">-- choose a Year --</option>
        <option
          v-for="y in allYears"
          :key="y"
          :value="y"
        >
          {{ y }}
        </option>
      </select>
    </label>


    <label>
      Select Grand Prix:
      <select v-model="selectedMeetingKey">
        <option disabled value="">-- choose a GP --</option>
        <option
          v-for="meeting in meetings"
          :key="meeting.meeting_key"
          :value="meeting.meeting_key"
        >
          {{ meeting.meeting_name }}
        </option>
      </select>
    </label>
    <label>
      Select Session:
      <select v-model="selectedSessionKey">
        <option disabled value="">-- choose a Session --</option>
        <option
          v-for="session in sessions"
          :key="session.session_key"
          :value="session.session_key"
        >
          {{ session.session_name }}
        </option>
      </select>
    </label>

  </div>
  <div class="flex justify-center items-center flex-wrap gap-10 " >
    <driverCard class="flex" v-for="driver in drivers" :key="driver.id" :driver="driver">></driverCard>
  </div>
</template>
