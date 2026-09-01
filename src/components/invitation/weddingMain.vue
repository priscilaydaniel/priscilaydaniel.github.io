<template>
  <WeddingHeader></WeddingHeader>

  <WeddingComeTo />
  <WeddingPlace></WeddingPlace>
  <WeddingSchedule></WeddingSchedule>
  <WeddingInfo></WeddingInfo>
  <WeddingForm></WeddingForm>
  <WeddingGift></WeddingGift>
  <WeddingPlaylist />
  <WeddingLastMessage />
</template>

<script setup>
import WeddingPlace from './weddingPlace.vue'
import WeddingInfo from './weddingInfo.vue'
import WeddingForm from './weddingForm.vue'
import WeddingGift from './weddingGift.vue'
import WeddingPlaylist from './weddingPlaylist.vue'
import WeddingHeader from './weddingHeader.vue'
import WeddingSchedule from './weddingSchedule.vue'
import WeddingComeTo from './weddingComeTo.vue'
import WeddingLastMessage from './weddingLastMessage.vue'
</script>
