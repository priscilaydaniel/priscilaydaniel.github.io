<template>
  <div class="wedding-qa">
    <div class="header-image-with-space header-image-pre-wedding-photo">
      <img
        :src="preboda4"
        alt="Example Image"
        class="header-image-with-frame"
      />
    </div>

    <div class="wedding-section-title">
      <h2>{{ t.infoTitle }}</h2>
    </div>

    <div class="wedding-qa-list">
      <div class="wedding-qa-item">
        <h3 class="wedding-q">{{ t.dressCodeQ }}</h3>
        <p class="wedding-a" v-html="t.dressCodeA"></p>
      </div>
      <div class="wedding-qa-item">
        <h3 class="wedding-q">{{ t.kidsQ }}</h3>
        <p class="wedding-a" v-html="t.kidsA"></p>
      </div>
      <div class="wedding-qa-item">
        <h3 class="wedding-q">
          {{ t.rsvpDeadlineQ }}
        </h3>
        <p class="wedding-a" v-html="t.rsvpDeadlineA"></p>
      </div>
      <div class="wedding-qa-item">
        <h3 class="wedding-q">
          {{ t.parkingQ }}
        </h3>
        <p class="wedding-a" v-html="t.parkingA"></p>
      </div>
      <div class="wedding-qa-item">
        <h3 class="wedding-q">
          {{ t.outOfTownQ }}
        </h3>
        <p class="wedding-a">
          {{ t.outOfTownA }}
        </p>          
        <ul class="wedding-recommendations">
          <li v-for="(hotel, idx) in t.hotels" :key="idx">{{ hotel }}</li>
        </ul> 
        <p class="wedding-a">
          {{ t.barsIntro }}
        </p>
        <ul>
          <li v-for="(bar, idx) in t.bars" :key="idx">{{ bar }}</li>
        </ul>
        <p class="wedding-a">
          {{ t.tacosIntro }}
        </p> 
        <ul>
          <li v-for="(taco, idx) in t.tacos" :key="idx">{{ taco }}</li>
        </ul>
        <p class="wedding-a">
          {{ t.breakfastIntro }}
        </p>
        <ul>
          <li v-for="(item, idx) in t.breakfast" :key="idx">{{ item }}</li>
        </ul> 
      </div>
    </div>
    <!-- Fin de los items -->
    <div class="header-image-with-space header-image-pre-wedding-photo">
      <img
        :src="preboda1"
        alt="Example Image"
        class="header-image-with-frame"
      />
    </div>
  </div>
</template>

<script setup>
import preboda4 from '@/assets/preboda/preboda_4.jpeg'
import preboda1 from '@/assets/preboda/preboda_1.jpeg'
import { t } from '@/locale.js'
</script>

<style lang="scss">
ul {
  display: table;
  margin: 0 auto;
  text-align: center;
  list-style-position: inside;
}

.wedding-qa {
  display: flex;
  flex-direction: column;
  width: 100%;

  .wedding-qa-title {
    padding: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2em;
    box-sizing: border-box;
  }

  .wedding-qa-list {
    display: flex;
    flex-direction: column;
    gap: 4em;
    padding: 2em 3em;
  }

  .wedding-qa-item {
    display: flex;
    max-width: min(100%, 70ch);
    gap: 1em;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .wedding-q {
      font-weight: bold;
      text-transform: uppercase;
      text-align: center;
    }

    .wedding-a {
      font-size: 1.2em;
      text-align: center;

      .text-black {
        color: #000000;
        font-weight: bold;
      }
    }
  }
}

/* Tablet and smaller screens */
@media screen and (max-width: 768px) {
  .wedding-qa-list-container {
    padding: 4em 3em;
  }
}

/* Mobile screens */
@media screen and (max-width: 480px) {
  .wedding-qa-list-container {
    padding: 4em 2em;
  }
}

@media screen and (min-width: 1024px) {
  .wedding-qa-list {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
