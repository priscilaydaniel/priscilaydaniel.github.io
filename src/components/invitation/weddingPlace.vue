<template>
  <div class="wedding-place">
    <picture class="wedding-place-flower wedding-place-flower-left">
      <source :srcset="ramilleteFlower" type="image/webp" />

      <img :src="ramilleteFlower" alt="Flores decorativas izquierda" class="section-image" loading="lazy" />
    </picture>

    <picture class="wedding-place-flower wedding-place-flower-right">
      <source :srcset="ramilleteFlower" type="image/webp" />

      <img :src="ramilleteFlower" alt="Flores decorativas derecha" class="section-image" loading="lazy" />
    </picture>

    <div class="wedding-section-title">
      <h2>{{ title }}</h2>
    </div>
    <div class="wedding-place-photo-info-container">
      <div class="wedding-place-place-photo-container">
        <img
          :src="alboreaGarden"
          alt="Quinta de anza"
          class="header-image-with-frame header-image-with-space header-image-place-photo"
          loading="lazy"
        />
      </div>

      <div class="wedding-place-info">
        <div class="wedding-place-info-name-address">
          <span class="wedding-title-handwriting">Quinta de Anza</span>
          <div class="wedding-place-address">
            <span>Pedro Villegas Ramírez 2, 83070</span>
            <span>Col del Razo, 83070 Hermosillo, Son</span>
          </div>
        </div>

        <div class="center">
          <WeddingLink :to="weddingPlaceGmapsLink">Cómo llegar</WeddingLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import alboreaGarden from '@/assets/img/alborea-3.jpeg'
import ramilleteFlower from '@/assets/flowers/flor-ramillete-2.webp'
import WeddingLink from '../ui/weddingLink.vue'

const title = 'Lugar de celebración'

const weddingPlaceGmapsLink =
  'https://maps.app.goo.gl/ciTGWS1BkmQaPdtr6'
</script>

<style lang="scss">
.wedding-place-flower {
  position: absolute;
  bottom: -14%;
  width: 7em;
  height: auto;
  z-index: 1;
}

.wedding-place-flower-left {
  left: 0;
  transform: scaleX(-1);
}

.wedding-place-flower-right {
  right: 0;
}

.wedding-place {
  min-height: 100dvh;
  min-height: 100vh;
  padding-bottom: 2em;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
}

.wedding-place-photo-info-container {
  position: relative;
  min-height: 80vh;
}

.wedding-place-info-name-address {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6em;

  .wedding-title-handwriting {
    font-size: 1.7em;
  }
}

.wedding-place-address {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2em;
  font-size: 0.85em;
}

.wedding-place-info {
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2em;
  position: relative;
  height: 40vh;
}


@media screen and (min-width: 1024px) {
  .header-image-place-photo {
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .wedding-place-place-photo-container {
    width: 70%;
    margin: 0 auto;
  }
}
</style>
