<template>
  <div class="wedding-envelope-container">
    <div :class="openClass">
      <div class="flap front"></div>
      <div class="flap top"></div>
      <div class="letter"></div>
    </div>
  </div>
</template>

<script setup>
import { debounce } from '@/utils/helper.js'
import { computed, onMounted, ref } from 'vue'

const isOpen = ref(false)

const emit = defineEmits(['animation-envelope-done'])

const openClass = computed(() => {
  return {
    envelope: true,
    open: isOpen.value,
  }
})

onMounted(() => {
  requestAnimationFrame(() => {
    openEnvelope()
  })
})

const openEnvelope = () => {
  isOpen.value = !isOpen.value

  onAnimationEnvelopeDone()
}

const onAnimationEnvelopeDone = debounce(function () {
  emit('animation-envelope-done')
}, 4000)
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.wedding-envelope-container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.envelope {
  width: 200px;
  height: 100px;

  background: #ddd;
  box-shadow:
    0 0 1px rgba(0, 0, 0, 0.5),
    0 1px 3px rgba(0, 0, 0, 0.25);
  position: relative;
  perspective: 800px;
}
.envelope:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border: 0 solid rgba(0, 0, 0, 0.25);
  border-width: 45px 100px;
  border-top-color: transparent;
  z-index: 2;
}

.envelope .flap {
  position: absolute;
  width: 100%;
  height: 0;
  border: 0 solid transparent;
  border-width: 50px 100px;
  z-index: 3;
}
.envelope .flap.front {
  border-left-color: #eee;
  border-right-color: #eee;
  border-bottom-color: #ccc;
  z-index: 3;
}
.envelope .flap.front:after {
  content: '';
  width: 100%;
  height: 0;
  position: absolute;
  left: -100px;
  bottom: -50px;
  border: 0 solid transparent;
  border-width: 49px 100px;
  border-bottom-color: #eee;
}

.envelope .flap.top {
  border-top-width: 55px;
  border-top-color: #aaa;
  z-index: 3;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  -webkit-transform-origin-y: top;

  perspective: 800;
  transform-style: preserve-3d;
}
.envelope.open .flap.top {
  animation-name: flip;
}
.envelope .flap.top:after {
  content: '';
  position: absolute;
  left: -100px; /* border-left-width */
  top: -55px; /* border-top-width */
  width: 100%;
  height: 0;
  border: 0 solid transparent;
  border-width: 54px 100px;
  border-top-color: #eee;
}

.envelope .letter {
  position: absolute;
  width: 194px;
  height: 84px;
  background: #fff;
  top: 8px;
  left: 3px;
  border: 1px solid #ccc;
  z-index: 1;
  animation-duration: 3s;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
  transform-style: preserve-3d;
}
.envelope.open .letter {
  animation-name: remove;
}

.envelope .letter:after {
  content: '';
  position: absolute;
  width: 192px;
  height: 75%;
  left: -1px;
  background: #fff;
  border: 1px solid #ccc;
  animation-duration: 1s;
  animation-delay: 4s;
  animation-fill-mode: forwards;
  -webkit-transform-origin-y: top;

  transform-style: preserve-3d;
  transform: rotateX(10deg);
}

.envelope .letter:after {
  animation-delay: 5s;
  animation-fill-mode: forwards;
  -webkit-transform-origin-y: bottom;

  transform: rotateX(-5deg);
  bottom: 0;
}

@keyframes flip {
  100% {
    transform: rotateX(180deg);
    z-index: 1;
  }
}

@keyframes remove {
  20% {
    top: -220px;
  }
  30% {
    top: -200px;
  }
  40% {
    top: -210px;
  }
  60% {
    top: -220px;
  }
  70% {
    top: -205px;
  }
  90% {
    top: -550px;
  }
  100% {
    display: none;
  }
}
</style>
