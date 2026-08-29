<template>
  <div class="wedding-playlist">
    <div class="wedding-playlist-flower-green">
      <picture>
        <source :srcset="flowerBigGreen" type="image/webp" />
        <img :src="flowerBigGreen" alt="Example Image" />
      </picture>
    </div>
    <!--   <div class="wedding-section-title">
      <h2>Lista de canciones</h2>
    </div>

    <div class="wedding-playlist-content">
      <span>
        Añade la canción que te gustaría que sonase en nuestra boda y la
        pondremos por ti.
      </span>
      <div class="wedding-playlist-link">
        <WeddingLink
          to="https://www.youtube.com/playlist?list=PLpPEgsDKOaBa0hXjk8NHj3nlX7pDahd_q&jct=js1IldtdLGhMmV8Su8szbuv0nUq_uQ"
          class="wedding-spotify-playlist"
        >
          Ver canciones
        </WeddingLink>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import flowerBigGreen from '@/assets/flowers/flower-middle-green-big.webp'
import WeddingLink from '@/components/ui/weddingLink.vue'
</script>

<style scoped>
.wedding-playlist {
  display: flex;
  flex-direction: column;

  .wedding-playlist-content {
    display: flex;
    flex-direction: column;
    gap: 2em;
    padding: 0 2em;

    color: var(--text-color-primary);
    text-align: center;

    span {
      font-size: 2em;
      font-family: 'Parisienne', cursive;
      font-weight: 400;
      font-style: normal;
      line-height: 1;
    }
  }

  .wedding-playlist-link {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }

  .wedding-spotify-playlist {
    svg {
      fill: white;
    }
  }
}

.wedding-playlist-flower-green {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 5em;
    object-fit: cover;
  }
}
</style>
