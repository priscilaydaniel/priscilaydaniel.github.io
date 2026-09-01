<template>
  <div class="wedding-form-container">
    <div class="wedding-section-title wedding-form-title-space">
      <h2>Confírmanos tu asistencia</h2>
    </div>

    <div class="wedding-form-card">
      <form @submit.prevent="submitForm">
        <div class="wedding-form">
          <div class="wedding-form-group">
            <WeddingInput v-model="formData.fullName" label="Nombre" required />
          </div>

          <label class="wedding-form-no-attend">
            <input type="checkbox" v-model="notAttending" />
            <span>No podré asistir</span>
          </label>

          <div class="wedding-form-collapsible" :class="{ collapsed: notAttending }">
            <div class="wedding-form-group">
              <WeddingSelect
                v-model="formData.numberPeople"
                :options="numberPeople"
                default-value="1"
                label="¿Cuántas personas son?"
              />
            </div>

            <div class="wedding-form-group">
              <WeddingInput
                v-model="formData.songField"
                label="¡Una canción que no puede faltar!"
              />
            </div>

            <div class="wedding-form-group">
              <WeddingTextarea
                v-model="formData.message"
                label="¿Quieres decirnos algo más?"
              />
            </div>
          </div>

          <div class="wedding-form-submit">
            <WeddingButton v-if="!isFormSubmitted">Enviar</WeddingButton>
            <div v-else class="wedding-form-thanks">
              ¡Gracias por enviarnos tu información!
            </div>
          </div>
        </div>
      </form>
    </div>

    <div class="header-image-with-space header-image-pre-wedding-photo">
      <img
        :src="preboda2"
        alt="Foto de preboda"
        class="header-image-with-frame"
        loading="lazy"
      />
    </div>
  </div>
</template>

<script setup>
import preboda2 from '@/assets/preboda/preboda_2.jpeg'
import { ref } from 'vue'

import WeddingInput from '../ui/weddingInput.vue'
import WeddingSelect from '../ui/weddingSelect.vue'
import WeddingTextarea from '../ui/weddingTextarea.vue'
import WeddingButton from '../ui/weddingButton.vue'

const formData = ref({
  fullName: '',
  numberPeople: 1,
  message: '',
  songField: '',
})

const isFormSubmitted = ref(false)
const notAttending = ref(false)

const numberPeople = [
  { label: 'Solo yo', value: 1 },
  { label: 'Seremos 2', value: 2 },
]

const submitForm = () => {
  const phone = import.meta.env.VITE_WHATSAPP_PHONE || '5216623616028'

  let messageText

  if (notAttending.value) {
    messageText = `¡Hola! Lamentablemente no podré asistir a la boda 😢\n\n`
    messageText += `*Nombre:* ${formData.value.fullName}\n`
  } else {
    const peopleText =
      formData.value.numberPeople === 1
        ? '1 (Solo yo)'
        : `${formData.value.numberPeople} personas`

    messageText = `¡Hola! Confirmo mi asistencia para la boda 💒✨\n\n`
    messageText += `*Nombre:* ${formData.value.fullName}\n`
    messageText += `*Asistentes:* ${peopleText}\n`

    if (formData.value.songField) {
      messageText += `*Canción:* ${formData.value.songField}\n`
    }
    if (formData.value.message) {
      messageText += `*Nota:* ${formData.value.message}\n`
    }
  }

  const encodedMessage = encodeURIComponent(messageText)
  const whatsappUrl = phone
    ? `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodedMessage}`
    : `https://api.whatsapp.com/send?text=${encodedMessage}`

  window.open(whatsappUrl, '_blank')

  if (window.gtag) {
    window.gtag('event', 'Form', {
      event_category: 'Form',
      event_label: 'WhatsApp RSVP',
      value: formData.value,
    })
  }

  isFormSubmitted.value = true
}
</script>

<style lang="scss">
.wedding-form-container {
  display: flex;
  flex-direction: column;

  .wedding-form-title-space {
    padding: 2em;
    text-align: center;
  }

  .wedding-form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding: 2em 3em;
  }

  .wedding-form-no-attend {
    display: flex;
    align-items: center;
    gap: 0.6em;
    cursor: pointer;
    user-select: none;

    input[type='checkbox'] {
      width: 20px;
      height: 20px;
      min-height: unset;
      accent-color: var(--pomp-and-power-middle);
      cursor: pointer;
      flex-shrink: 0;
    }

    span {
      font-size: 0.95em;
      color: var(--text-color-primary);
    }
  }

  .wedding-form-collapsible {
    display: flex;
    flex-direction: column;
    gap: 1em;
    overflow: hidden;
    max-height: 600px;
    opacity: 1;
    transition: max-height 0.4s ease, opacity 0.3s ease;

    &.collapsed {
      max-height: 0;
      opacity: 0;
      pointer-events: none;
    }
  }

  .wedding-form-submit {
    padding: 2em;
    font-size: 1.2em;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .wedding-form-thanks {
    width: 100%;
    text-align: center;
    font-size: 1.2em;
    font-family: 'Merienda', cursive;
  }
}
</style>
