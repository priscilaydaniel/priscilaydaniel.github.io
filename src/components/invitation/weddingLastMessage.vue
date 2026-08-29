<template>
  <div class="wedding-last-message">
    <div class="wedding-last-message-content">
      <div class="wedding-last-message-ring">
        <GoldenRingIcon />

        <div class="wedding-last-message-text">
          <span v-if="isWeddingPast">{{ weddingPastMessage }}</span>
          <span v-else>¡Te esperamos!</span>
          <span v-if="isWeddingPast">¡Gracias por haberlo compartido con nosotros!</span>
          <span v-else>Quedan {{ daysLeftToWedding }} días</span>
        </div>
      </div>
      <div class="wedding-last-message-footer">
        <img
          :src="flowerFooter"
          alt="Example Image"
          class="section-image animation-wind"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import GoldenRingIcon from '@/assets/svg/golden-ring.svg'
import flowerFooter from '@/assets/flowers/flor-wedding-footer.webp'

const WEDDING_DATE = '2024-10-12'

const daysLeftToWedding = ref(daysUntil(WEDDING_DATE))

const isWeddingPast = computed(() => daysLeftToWedding.value < 0)

const weddingPastMessage = computed(() => {
  const { years, months, days } = getExactTimeSinceWedding(WEDDING_DATE)
  
  const parts = []
  if (years > 0) {
    parts.push(`${years} ${years === 1 ? 'año' : 'años'}`)
  }
  if (months > 0) {
    parts.push(`${months} ${months === 1 ? 'mes' : 'meses'}`)
  }
  if (days > 0 || parts.length === 0) {
    parts.push(`${days} ${days === 1 ? 'día' : 'días'}`)
  }
  
  return `Hace ${parts.join(', ')}`
})

function getExactTimeSinceWedding(dateString) {
  const weddingDate = new Date(dateString)
  const today = new Date()
  
  let years = today.getFullYear() - weddingDate.getFullYear()
  let months = today.getMonth() - weddingDate.getMonth()
  let days = today.getDate() - weddingDate.getDate()
  
  if (days < 0) {
    months--
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0)
    days += prevMonth.getDate()
  }
  
  if (months < 0) {
    years--
    months += 12
  }
  
  return { years, months, days }
}

function daysUntil(targetDate) {
  // Get the current date
  const currentDate = new Date()

  // Parse the target date
  const parsedTargetDate = new Date(targetDate)

  // Calculate the time difference in milliseconds
  const timeDifference = parsedTargetDate - currentDate

  // Calculate the number of days
  const days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24))

  return days
}
</script>

<style scoped>
.wedding-last-message {
  display: flex;
  flex-direction: column;
  height: 70vh;

  .wedding-last-message-content {
    position: relative;
    color: var(--text-color-primary);
    text-align: center;
    height: 100%;

    .wedding-last-message-ring {
      padding: 2em;
      position: relative;
      display: inline-block;
      overflow: hidden;

      svg {
        width: 100%;
        animation: moveInCircle 60s linear infinite;
      }
    }

    .wedding-last-message-text {
      display: flex;
      flex-direction: column;
      gap: 1em;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      span:first-child {
        font-size: 2.2em;
        font-family: 'Parisienne', cursive;
        font-weight: 400;
        font-style: normal;
        line-height: 1;
      }
    }

    .wedding-last-message-footer {
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
}

@keyframes moveInCircle {
  0% {
    transform: rotate(0deg); /* Start position */
  }
  100% {
    transform: rotate(360deg); /* End position */
  }
}

@keyframes windAnimation {
  0% {
    transform: translateX(0) rotate(0);
  }
  50% {
    transform: translateX(0) rotate(1deg);
  }
  100% {
    transform: translateX(0) rotate(0);
  }
}

.animation-wind {
  animation: windAnimation 25s ease-in-out infinite alternate;
}
</style>
