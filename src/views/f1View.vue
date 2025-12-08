<script setup>
import { ref, onMounted, watch } from 'vue'
import axios from 'axios'

const meetings = ref([])
const selectedMeetingKey = ref("")

const emit = defineEmits(["update:meetingKey"])

const allYears = ref([2023, 2024, 2025])
const year = ref("")

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

watch(selectedMeetingKey, (val) => {
  emit("update:meetingKey", val)
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
  </div>
</template>
