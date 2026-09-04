<template>
  <div class="wedding-come">
    <div class="wedding-come-info">
      <span>
        {{ t.comeToMessage1 }}
      </span>
    </div>

    <div class="header-image-with-space header-image-pre-wedding-photo">
      <img
        :src="preboda5"
        alt="Example Image"
        class="header-image-with-frame"
      />
    </div>

    <div class="wedding-come-info">
      <span>
        {{ t.comeToMessage2 }}
      </span>
      <br>
    </div>
    <picture class="flower-green">
      <source :srcset="flowerGreenBig" type="image/webp" />

      <img :src="flowerGreenBig" alt="flowers" />
    </picture>
  </div>
</template>

<script setup>
import preboda5 from '@/assets/preboda/preboda_5.jpeg'
import flowerGreenBig from '@/assets/flowers/flower-middle-green-big.webp'
import { t } from '@/locale.js'

const weddingPlaceGmapsLink =
  'https://www.google.es/maps/place/Finca+Albore%C3%A1+%7C+Albore%C3%A1+Eventos/@36.3139541,-6.0987968,14z/data=!4m6!3m5!1s0xd0c37ce34f873cf:0x258e47f1dbb5e922!8m2!3d36.3175581!4d-6.079622!16s%2Fg%2F11c1pqh07c?entry=ttu'
</script>

<style lang="scss">
.wedding-come {
  min-height: 100dvh;
  min-height: 100vh;
  padding: 3em 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.wedding-come-info {
  padding: 2em;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    font-size: 2em;
    font-family: 'Parisienne', cursive;
    font-weight: 400;
    font-style: normal;
    line-height: 1;
    color: var(--text-color-primary);
    text-align: center;
  }
}

.flower-green {
  position: absolute;
  bottom: -2%;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
    height: 6.1em;
    object-fit: cover;
  }
}

@media screen and (min-width: 1024px) {
  .wedding-come {
    height: 100%;
  }

  .wedding-come-info {
    width: 80%;
    font-size: 1.4em;
  }
}
</style>
