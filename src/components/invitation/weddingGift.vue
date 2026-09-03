<template>
  <div class="wedding-gift">
    <div class="wedding-section-title">
      <h2>Regalo de bodas</h2>
    </div>

    <div class="wedding-gift-content">
      <div class="wedding-gift-content-message">
        <span>
          Lo más importante para nosotros es compartir este día tan especial
          contigo, pero si quieres tener un detalle:
        </span>
      </div>

      <div ref="fadeElements" class="wedding-gift-card">
        <div class="card-container" @click="flipCard">
          <div :class="{ card: true, flipped: isFlipped }">
            <div class="front">
              <div class="card-gift-info-container">
                <WeddingGiftIcon />
              </div>
            </div>
            <div class="back">
              <div class="card-gift-info-container">
                <span class="card-thanks">¡Muchas gracias!</span>

                <div class="gift-options">
                  <!-- Liverpool -->
                  <div class="gift-option">
                    <span class="gift-option-label">Mesa de regalos</span>
                    <a
                      href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/60026882"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="mesa-link"
                      @click.stop
                    >
                      Liverpool
                    </a>
                  </div>

                  <!-- Amazon -->
                  <div class="gift-option">
                    <span class="gift-option-label">Gift card Amazon</span>
                    <a
                      href="https://www.amazon.com.mx/Amazon-eGift-Card-Amazon-Logo-Animated/dp/B07PMMFSPC/?th=1&amp;gpo=300"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="mesa-link amazon-link"
                      @click.stop
                    >
                      Amazon
                    </a>
                    <button
                      class="email-copy-btn"
                      @click.stop="copyEmail"
                      :class="{ copied: emailCopied }"
                    >
                      <span class="email-text">{{ emailCopied ? '¡Copiado!' : 'newnowave@gmail.com' }}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <p class="wedding-gift-cash-note">
    ¿Un obsequio en efectivo entregado con todo el corazón y los mejores deseos?
    ¡Sí, también lo aceptamos!
  </p>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import WeddingGiftIcon from '@/assets/svg/wedding-gift.svg'

// Flip card when observed

const fadeElements = ref([])

onMounted(() => {
  nextTick(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            isFlipped.value = true
          }, 1695)
          observer.unobserve(entry.target)
        }
      })
    })

    const elements = fadeElements.value.querySelectorAll(
      '.card-container',
    )

    console.log(elements)

    if (elements) {
      elements.forEach((el) => {
        observer.observe(el)
      })
    }
  })
})
//end of flip card

const isFlipped = ref(false)

const flipCard = () => {
  if (isFlipped.value) return
  
  isFlipped.value = true

  if (window.gtag) {
    window.gtag('event', 'Gift Card', {
      event_category: 'Gift Card',
      event_label: 'See info card details',
    })
  }

  setTimeout(() => {
    isFlipped.value = false
  }, 40000)
}

const emailCopied = ref(false)

const copyEmail = () => {
  const email = 'newnowave@gmail.com'
  const showCopied = () => {
    emailCopied.value = true
    setTimeout(() => {
      emailCopied.value = false
    }, 2000)
  }

  // Try modern Clipboard API first (requires HTTPS + user gesture)
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email).then(showCopied).catch(() => {
      fallbackCopy(email, showCopied)
    })
  } else {
    fallbackCopy(email, showCopied)
  }
}

const fallbackCopy = (text, onSuccess) => {
  const textarea = document.createElement('textarea')
  textarea.value = text
  // Keep off-screen but in DOM so iOS can select it
  textarea.style.position = 'fixed'
  textarea.style.left = '0'
  textarea.style.top = '0'
  textarea.style.opacity = '0'
  textarea.style.fontSize = '16px' // Prevents iOS zoom
  document.body.appendChild(textarea)
  textarea.focus()
  textarea.select()
  // iOS needs setSelectionRange after focus
  textarea.setSelectionRange(0, text.length)
  try {
    document.execCommand('copy')
    onSuccess()
  } catch (e) {
    console.warn('Copy failed', e)
  }
  document.body.removeChild(textarea)
}

</script>

<style scoped>

.wedding-gift-cash-note {
  text-align: center; 
}

.wedding-gift {
  min-height: 78vh;
  padding-bottom: 2em;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;

  .wedding-gift-content {
    display: flex;
    flex-direction: column;
    gap: 2em;
    padding: 2em 1em;
  }

  .wedding-gift-content-message {
    text-align: center;

    font-size: 2em;
    font-family: 'Parisienne', cursive;
    font-weight: 400;
    font-style: normal;
    line-height: 1;
    color: var(--text-color-primary);
    text-align: center;
  }

  .wedding-gift-card {
    position: relative;
    width: 100%;
  }

  .card-container {
    position: relative;
    perspective: 1000px;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.5s;

    .card {
      width: 100%;
      height: 100%;
      position: absolute;
      transform-style: preserve-3d;
      transition: transform 0.5s;
    }
  }
}

.front,
.back {
  width: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  gap: 1em;
  justify-content: center;
  align-items: center;
}

.front {
  display: flex;
  flex-direction: column;

  .card-gift-info-container {
    padding: 2em;
    width: 65%;
    filter: drop-shadow(0 0 2rem var(--pomp-and-power));

    svg {
      animation: shake 2s cubic-bezier(0.36, 0.07, 0.19, 0.97) infinite;
    }
  }
}
@keyframes shake {
  0%,
  100% {
    transform: translateX(0) rotate(0) scale(1);
  }
  40%,
  60% {
    transform: translateX(-2px) rotate(-1deg) scale(1.01);
  }
  50%,
  70% {
    transform: translateX(2px) rotate(1deg) scale(1.01);
  }
}

/* Delay the animation for 3 seconds after it ends */

@keyframes delay {
  0% {
    opacity: 0; /* Start delay with opacity 0 */
  }
  100% {
    opacity: 0; /* End delay with opacity 0 */
  }
}
.back {
  display: flex;
  flex-direction: column;
  transform: rotateY(180deg);
  background-image: url('@/assets/img/card-background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .card-gift-info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2em;
    padding: 2em 1.5em;
  }

  .gift-options {
    display: flex;
    flex-direction: row;
    gap: 1.5em;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
  }

  .gift-option {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6em;
    flex: 1;
  }

  .gift-option-label {
    font-size: 0.75em;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--text-color-primary);
    opacity: 0.7;
    text-align: center;
  }

  .mesa-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 44px;
    padding: 0.45em 1.1em;
    background-color: var(--pomp-and-power-middle);
    color: #fff;
    border-radius: 30px;
    text-decoration: none;
    font-size: 0.75em;
    text-transform: uppercase;
    letter-spacing: 3px;
    transition: background-color 0.3s ease;
    width: 100%;
    text-align: center;

    &:hover {
      background-color: var(--pomp-and-power-dark);
    }
  }

  .amazon-link {
    background-color: #c7873a;

    &:hover {
      background-color: #a06228;
    }
  }

  .email-copy-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.6);
    border: 1px solid var(--pomp-and-power);
    border-radius: 20px;
    padding: 0.3em 0.8em;
    cursor: pointer;
    transition: background 0.3s ease, border-color 0.3s ease;
    width: 100%;

    &.copied {
      background: rgba(200, 240, 210, 0.8);
      border-color: #5aaa6f;
    }

    .email-text {
      font-size: 0.65em;
      color: var(--text-color-primary);
      letter-spacing: 0.5px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    }
  }

  .card-thanks {
    font-size: 1.6em;
    font-family: 'Parisienne', cursive;
    font-weight: 400;
    font-style: normal;
    color: var(--text-color-primary);
  }
}

.card.flipped {
  transform: rotateY(180deg) translateZ(50px);
}

@media screen and (max-width: 768px) {
  .card-container {
    width: 320px;
    height: 220px;
  }
}

@media screen and (min-width: 1024px) {
  .front {
    .card-gift-info-container {
      width: 40%;
    }
  }
}
</style>
