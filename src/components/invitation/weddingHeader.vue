<template>
  <header>
    <picture class="header-flower-big">
      <source :srcset="ramilleteGrande" type="image/webp" />

      <img
        :src="ramilleteGrande"
        alt="Flores decorativas"
        class="section-image animation-wind"
        loading="lazy"
      />
    </picture>

    <picture class="header-flower-small on-the-left">
      <source :srcset="ramilleteFino" type="image/webp" />

      <img
        :src="ramilleteFino"
        alt="Flores decorativas izquierda"
        class="section-image animation-wind"
        loading="lazy"
      />
    </picture>

    <picture class="header-flower-small on-the-right">
      <source :srcset="ramilleteFino" type="image/webp" />

      <img
        :src="ramilleteFino"
        alt="Flores decorativas derecha"
        class="section-image animation-wind"
        loading="lazy"
      />
    </picture>

    <div class="wedding-header-main">
      <div class="header-image-hands-container">
        <img
          :src="preboda230"
          alt="Foto de preboda"
          class="header-image-with-frame"
          loading="eager"
        />
      </div>

      <div class="header-info-container">
        <span class="header-we-get-married">¡Nos casamos!</span>

        <div class="header-couple-names-container">
          <div class="header-couple-first-name">
            <span>Lidia &</span>
            <span></span>
          </div>
          <div class="header-couple-second-name">
            <span></span>
            <span>Daniel</span>
          </div>
        </div>
      </div>
    </div>
    <div class="header-header-main-bottom">
      <div class="header-date-info">
        <span class="date-month">OCTUBRE </span>
        <div class="grid-container header-date-central">
          <div class="grid-item day-week">
            <div class="lines-top-bottom">
              <span>SÁBADO</span>
            </div>
          </div>
          <div class="grid-item day-number">12</div>
          <div class="grid-item day-time">
            <div class="lines-top-bottom">
              <span>13:00h.</span>
            </div>
          </div>
        </div>

        <span class="date-year">2024</span>
      </div>
    </div>

    <div class="header-scroll-down">
      <ChevronDoubleDownIcon />
    </div>
  </header>
</template>

<script setup>
import preboda230 from '@/assets/preboda/preboda_main.jpg'
import ramilleteGrande from '@/assets/flowers/flower-top-right.webp'
import ramilleteFino from '@/assets/flowers/flower-top-left.webp'
import { ChevronDoubleDownIcon } from '@heroicons/vue/24/solid'
</script>

<style lang="scss">
/* Keyframes for the animation */
@keyframes scrollIcon {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(20px);
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
  animation: windAnimation 12s ease-in-out infinite alternate;
}

.header-scroll-down {
  bottom: 10%;
  left: 0;
  right: 0;
  margin: auto;
  position: absolute;
  width: 24px;
  opacity: 0;
  animation: scrollIcon 2s ease-in-out 2.2s 5;
}

.grid-container {
  display: grid;
  grid-template-columns: 45% 10% 45%;
  width: 100%;

  .grid-item {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .grid-item:first-child {
    justify-content: flex-end;
  }

  .grid-item:last-child {
    justify-content: flex-start;
  }
}

.header-date-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  width: 100%;
}

.date-month {
  font-size: 1.4em;
  font-family: 'Merienda', cursive;
  font-optical-sizing: auto;
  font-style: normal;
  color: var(--text-color-primary);
}

.date-year {
  font-size: 1.4em;
  font-family: 'Merienda', cursive;
  font-optical-sizing: auto;
  font-style: normal;
  color: var(--text-color-primary);
}

.lines-top-bottom {
  border-top: 1px solid var(--text-color-primary);
  border-bottom: 1px solid var(--text-color-primary);
  padding: 0.3em 0;
  width: 100px;

  display: flex;
  justify-content: center;
}

.header-date-central {
  .day-week {
    font-size: 1.4em;
    font-family: 'Merienda', cursive;
    font-optical-sizing: auto;
    font-style: normal;
    color: var(--text-color-primary);
    padding-right: 1em;
  }

  .day-number {
    font-size: 2.4em;
    font-family: 'Parisienne', cursive;
    font-weight: bold;
    font-style: normal;

    color: var(--text-color-primary);
  }

  .day-time {
    font-size: 1.4em;
    font-family: 'Merienda', cursive;
    font-optical-sizing: auto;
    font-style: normal;
    color: var(--text-color-primary);
    padding-left: 1em;
  }
}

.wedding-header-main {
  height: 65vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.header-header-main-bottom {
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
}

.header-flower-big {
  position: absolute;
  top: 0;
  right: 0;
  width: 32em;
  height: auto;
  z-index: 10;
}

.header-flower-small,
.header-flower-small {
  position: absolute;
  bottom: -14%;
  width: 14em;
  height: auto;
  z-index: 1;
}

.on-the-left {
  left: 0;
}

.on-the-right {
  right: 0;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
}

/* Tablet and smaller screens */
@media screen and (max-width: 768px) {
  .header-flower-big {
    width: 21em;
  }

  .header-flower-small,
  .header-flower-small-simetric {
    width: 7em;
  }
}

header {
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;

  .header-image-hands-container {
    padding: 0.4em;
    height: 40vh;
    display: flex;
    align-items: flex-end;
  }

  .header-info-container {
    height: 25vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1.2em;
  }

  .header-we-get-married {
    font-size: 1.4em;
    font-family: 'Merienda', cursive;
    font-optical-sizing: auto;
    font-style: normal;
  }

  .header-couple-central {
    font-size: 2.6em;
    font-family: 'Parisienne', cursive;
    font-weight: 400;
    font-style: normal;

    color: var(--text-color-primary);

    span:first-child {
      padding-right: 0.2em;
    }

    span:last-child {
      padding-left: 0.3em;
    }
  }

  .header-couple-names-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 4em;
    font-family: 'Parisienne', cursive;
    font-weight: 500;
    color: var(--text-color-primary);
  }

  .header-couple-first-name {
    display: grid;
    grid-template-columns: 85% 15%;

    span:first-child {
      display: flex;
      justify-content: center;
    }
  }

  .header-couple-second-name {
    display: grid;
    grid-template-columns: 15% 85%;

    span:last-child {
      display: flex;
      justify-content: center;
    }
  }

  .header-info {
    font-family: 'Libre Baskerville', serif;
    font-weight: 400;
    font-style: normal;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
      margin: 0.4em 0;
      letter-spacing: 1px;
      color: var(--text-color-primary);
      font-size: 1.4em;
      font-weight: 400;
      text-transform: uppercase;
    }

    .header-info-quedan {
      font-family: 'Libre Baskerville', serif;
      font-weight: 400;
      font-style: normal;
      font-size: 1em;
      padding-top: 2em;
    }
  }
}

@media screen and (min-width: 1024px) {
  .header-image-hands-container {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 80%;
      height: 100%;
    }
  }
}
</style>
