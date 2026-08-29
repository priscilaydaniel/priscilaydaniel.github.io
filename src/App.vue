<template>
  <main id="main" class="layout">
    <transition name="fade" @before-enter="beforeEnter" @enter="enter">
      <div v-if="showWeddingInvitation" class="wedding-invitation">
        <InvitationMain />
      </div>
    </transition>

    <EnvelopeApp
      v-if="!showWeddingInvitation"
      @animation-envelope-done="onAnimationEnvelopeDone"
    ></EnvelopeApp>
  </main>
</template>
<script setup>
import { ref } from 'vue'
// TODO change to false to see full sequence
const showWeddingInvitation = ref(false)
import EnvelopeApp from './components/envelope/EnvelopeMain.vue'
import InvitationMain from './components/invitation/weddingMain.vue'

const beforeEnter = (el) => {
  el.style.opacity = 0
}

const enter = (el, done) => {
  requestAnimationFrame(() => {
    el.style.transition = 'transform 0.8s, opacity 0.8s'
    el.style.opacity = 1
    done()
  })
}

const onAnimationEnvelopeDone = () => {
  showWeddingInvitation.value = true
}
</script>

<style lang="scss" scoped>
.layout {
  box-sizing: border-box;

  .wedding-invitation {
    height: 100%;
    width: 100%;
  }
}

.fade-enter-active {
  transition:
    opacity 0.5s,
    transform 0.5s;
}
</style>
