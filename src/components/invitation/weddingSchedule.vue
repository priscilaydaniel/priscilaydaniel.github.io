<template>
  <div class="wedding-schedule">
    <div class="wedding-section-title">
      <h2>Itinerario</h2>
    </div>

    <div ref="fadeElements" class="wedding-schedule-list">
      <div class="wedding-schedule-list-item">
        <WeddingArchIcon class="wedding-schedule-icon" />
        <div class="wedding-schedule-list-item-info">
          <p class="wedding-schedule-list-item-title">Ceremonia Civil</p>
          <p class="wedding-schedule-list-item-time">13:00</p>
        </div>
      </div>

      <div class="wedding-schedule-list-item">
        <WeddingAperitivosIcon class="wedding-schedule-icon" />
        <div class="wedding-schedule-list-item-info">
          <p class="wedding-schedule-list-item-title">Aperitivos</p>
          <p class="wedding-schedule-list-item-time">14:00</p>
        </div>
      </div>

      <div class="wedding-schedule-list-item">
        <WeddingBanqueteIcon class="wedding-schedule-icon" />
        <div class="wedding-schedule-list-item-info">
          <p class="wedding-schedule-list-item-title">Banquete</p>
          <p class="wedding-schedule-list-item-time">16:00</p>
        </div>
      </div>

      <div class="wedding-schedule-list-item">
        <WeddingBaileIcon class="wedding-schedule-icon" />
        <div class="wedding-schedule-list-item-info">
          <p class="wedding-schedule-list-item-title">Baile Nupcial</p>
          <p class="wedding-schedule-list-item-time">18:30</p>
        </div>
      </div>

      <div class="wedding-schedule-list-item">
        <WeddingDiscoIcon class="wedding-schedule-icon" />
        <div class="wedding-schedule-list-item-info">
          <p class="wedding-schedule-list-item-title">¡Fiesta!</p>
          <p class="wedding-schedule-list-item-time">19:00</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

import WeddingArchIcon from '@/assets/svg/wedding-arch.svg'
import WeddingAperitivosIcon from '@/assets/svg/wedding-aperitivos.svg'
import WeddingBanqueteIcon from '@/assets/svg/wedding-banquete.svg'
import WeddingBaileIcon from '@/assets/svg/wedding-baile.svg'
import WeddingDiscoIcon from '@/assets/svg/wedding-disco.svg'

const fadeElements = ref([])

onMounted(() => {
  nextTick(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible')
          observer.unobserve(entry.target)
        }
      })
    })

    const elements = fadeElements.value.querySelectorAll(
      '.wedding-schedule-list-item',
    )

    if (elements) {
      elements.forEach((el) => {
        observer.observe(el)
      })
    }
  })
})
</script>

<style lang="scss">
/* Initial state for the fade-in effect */
.fade-in {
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.wedding-schedule {
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

.wedding-schedule-flower {
  position: absolute;
  right: 0;
  top: 30%;
  height: 35%;
}

.wedding-schedule-title {
  padding: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2em;
  box-sizing: border-box;
}

.wedding-schedule-icon {
  width: 64px;
  height: auto;
}

.wedding-schedule-list {
  display: flex;
  flex-direction: column;
  gap: 4em;
  padding: 2em 3em;
}

.wedding-schedule-list-item-info {
  display: flex;
  flex-direction: column;
  gap: 0.4em;
}

.wedding-schedule-list-item {
  display: flex;
  align-items: center;
  gap: 2em;
  opacity: 0;
  transition: opacity 1.2s ease-in-out;

  &.fade-in-visible {
    opacity: 1;
  }
}

.wedding-schedule-list-item-title {
  font-size: 2em;
  font-family: 'Parisienne', cursive;
  font-weight: 400;
  font-style: normal;

  color: var(--text-color-primary);
}

.wedding-schedule-list-item-time {
  font-size: 1.2em;
}

@media screen and (min-width: 1024px) {
  .wedding-schedule {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
