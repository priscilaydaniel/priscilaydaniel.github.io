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
        <div
          class="header-image-with-frame header-image-with-space header-image-place-photo"
        >
          <div class="wedding-place-blend">
            <img class="photo2" :src="alboreaGarden" alt="Right Photo" />
            <img class="photo1 right" :src="alboreaEntrance" alt="Left Photo" />
          </div>
        </div>
      </div>

      <div class="wedding-place-info">
        <div class="wedding-place-info-name-address">
          <span class="wedding-title-handwriting">Finca Alboreá</span>
          <div class="wedding-place-address">
            <span>Carril de los Brenes, 6, 11149</span>
            <span>Conil de la Frontera, Cádiz</span>
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
import alboreaGarden from '@/assets/img/alborea-3.webp'
import alboreaEntrance from '@/assets/img/alborea-2.webp'
import ramilleteFlower from '@/assets/flowers/flor-ramillete-2.webp'
import WeddingLink from '../ui/weddingLink.vue'

const title = 'Lugar de celebración'

const weddingPlaceGmapsLink =
  'https://www.google.es/maps/place/Finca+Albore%C3%A1+%7C+Albore%C3%A1+Eventos/@36.3139541,-6.0987968,14z/data=!4m6!3m5!1s0xd0c37ce34f873cf:0x258e47f1dbb5e922!8m2!3d36.3175581!4d-6.079622!16s%2Fg%2F11c1pqh07c?entry=ttu'
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

.wedding-place-photo-info-container {
  position: relative;
  height: 80vh;
}

.wedding-place-info-name-address {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6em;
}

.wedding-place-address {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2em;
  font-size: 1.2em;
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

.wedding-place-blend {
  --pct1: 33;
  --pct2: 66;
  --angle: 90;

  height: auto;
  width: 100%;
  position: relative;

  aspect-ratio: 3 / 2;

  > * {
    position: absolute;
    top: 0;
    left: 0;
    inset: 0;
    background-size: cover;
    width: 100%;
  }

  .right {
    -webkit-mask-image: linear-gradient(
      calc(var(--angle) * 1deg),
      transparent calc(var(--pct1) * 1%),
      #fff calc(var(--pct2) * 1%)
    );
  }
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
