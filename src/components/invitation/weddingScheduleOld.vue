<template>
  <div>
    <div class="wedding-schedule-title">
      <h2>Te compartimos más detalles de nuestra celebración</h2>
    </div>

    <div ref="scrollContainer" class="wedding-schedule">
      <div class="container left">
        <div class="content">
          <h2>Ceremonia Civil</h2>
        </div>
      </div>
      <div class="container right">
        <div class="content">
          <h2>Aperitivos</h2>
        </div>
      </div>
      <div class="container left">
        <div class="content">
          <h2>Banquete</h2>
        </div>
      </div>
      <div class="container right">
        <div class="content">
          <h2>Baile Nupcial</h2>
        </div>
      </div>
      <div class="container left">
        <div class="content">
          <h2>¡Que empiece la fiesta!</h2>
        </div>
      </div>

      <div>
        <div class="schedule-vertical-line"></div>
        <div class="schedule-vertical-line-progress"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useWindowScroll, useWindowSize } from '@vueuse/core'
import { ref, watch, onMounted } from 'vue'

const { y: windowScrollY } = useWindowScroll()
const { width: windowHeight } = useWindowSize()

const timelineHeight = ref(0)
const scrollContainer = ref(null)

const observer = ref(null)
const hasIntersectedFirstTime = ref(false)
const scrollPixelsStart = ref(null)
const scrollPixelsEnd = ref(null)

onMounted(() => {
  const options = {
    threshold: 0.4,
  }
  observer.value = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        hasIntersectedFirstTime.value = true
      }
    })
  }, options)

  observer.value.observe(scrollContainer.value)
})

watch(
  () => hasIntersectedFirstTime.value,
  () => {
    // console.log(hasIntersectedFirstTime)
    scrollPixelsStart.value = windowScrollY.value
    scrollPixelsEnd.value =
      scrollPixelsStart.value + scrollContainer.value.offsetHeight

    // console.log(scrollPixelsStart.value, scrollContainer.value.offsetHeight)
    if (observer.value) {
      observer.value.disconnect()
    }
  },
)

watch(
  () => windowScrollY.value,
  (newValue, oldValue) => {
    if (
      scrollPixelsStart.value &&
      newValue > scrollPixelsStart.value &&
      newValue < scrollPixelsEnd.value
    ) {
      timelineHeight.value = `${newValue - scrollPixelsStart.value}px`
    }
  },
)
</script>

<style lang="scss">
.wedding-schedule-title {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2em 0;
}

.wedding-schedule {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

.schedule-vertical-line,
.schedule-vertical-line-progress {
  position: absolute;
  width: 2px;
  background-color: var(--vertical-line-color-primary);
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
  height: v-bind(timelineHeight);
}

/* Container around content */
.container {
  padding: 10px 40px;
  position: relative;
  width: 50%;

  /* The actual content */
  .content {
    padding: 0 16px 48px;
    display: flex;
    gap: 1em;
    flex-direction: column;
  }

  &::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    right: -4px;
    background-color: white;

    border: 2px solid var(--text-color-primary);
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }

  /* Place the container to the left */
  &.left {
    left: 0;

    .content {
      align-items: end;
    }
  }
  /* Place the container to the right */
  &.right {
    left: 50%;

    &::after {
      left: -8px;
    }
  }
}

/* Media queries - Responsive wedding-schedule on screens less than 600px wide */
@media screen and (max-width: 768px) {
  /* Place the timelime to the left */
  .wedding-schedule::after {
    left: 31px;
  }

  /* Full-width containers */
  .container {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;

    &.left {
      .content {
        align-items: start;
      }
    }

    &.left::after,
    &.right::after {
      left: 28px;
    }

    &.right {
      left: 0%;
    }
  }

  .schedule-vertical-line,
  .schedule-vertical-line-progress {
    left: 10%;
  }
}
</style>
