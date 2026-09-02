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
      <h2>Más detalles</h2>
    </div>

    <div class="wedding-qa-list">
      <div class="wedding-qa-item">
        <h3 class="wedding-q">¿Cómo hay que ir vestido?</h3>
        <p class="wedding-a">
          Nos encantaría ver a nuestra familia y amigos vestidos elegantes. El
          código de vestimenta es  <strong class="text-black">formal</strong>.
        </p>
      </div>
      <div class="wedding-qa-item">
        <h3 class="wedding-q">¿Puedo traer a mis hijos?</h3>
        <p class="wedding-a">
          Nos encantaría que este día fuera una oportunidad para que los adultos
          se diviertan como niños. Por eso, hemos decidido que sea una
          celebración <strong class="text-black">solo para adultos</strong>. ¡Gracias por tu comprensión!
        </p>
      </div>
      <div class="wedding-qa-item">
        <h3 class="wedding-q">
          ¿Con cuánta antelación deberíamos confirmar nuestra asistencia?
        </h3>
        <p class="wedding-a">
          Nos encantaría contar contigo en este día tan especial. Lo ideal sería
          que nos confirmes lo antes posible para poder planear la mejor fiesta,
          pero si necesitas tiempo, te pedimos que nos lo comuniques antes del  <strong class="text-black">20
          de Octubre.</strong>
        </p>
      </div>
      <div class="wedding-qa-item">
        <h3 class="wedding-q">
          Estacionamiento y transporte
        </h3>
        <p class="wedding-a">
          Recomendamos usar applicaciones de transporte para acudir al evento ya que el
          <strong class="text-black">estacionamiento es limitado</strong>
        </p>
      </div>
      <div class="wedding-qa-item">
        <h3 class="wedding-q">
          Recomendaciones para foraneos
        </h3>
        <p class="wedding-a">
          En caso de venir de fuera recomendamos las siguientes opciones de hospedaje:
        </p>          
        <ul class="wedding-recommendations">
          <li>Hotel Lucerna</li>
          <li>Araiza Hermosillo</li>
          <li>Hotel Colonial</li>
          <li>Hotel Suites Kino</li>
        </ul> 
        <p class="wedding-a">
        Las siguientes opciones de bares:
        </p>
        <ul>
          <li>Buquibichi</li>
          <li>Bombarderos</li>
          <li>La ruina</li>
          <li>London pub</li>
        </ul>
        <p class="wedding-a">
          Las siguientes recomendaciones aprovadas de tacos:
        </p> 
        <ul>
          <li>Tacos del Sam</li>
          <li>Tacos del Chava</li>
          <li>Tacos del Chambarete</li>
          <li>Tacos de Arturo</li>
        </ul>
        <p class="wedding-a">
        Y las siguientes opciones de desayuno:
        </p>
        <ul>
          <li>Gatogordo</li>
          <li>El diputado y la Meche</li>
          <li>Onza</li>
          <li>Mulo</li>
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
