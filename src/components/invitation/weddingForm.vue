<template>
  <div class="wedding-form-container">
    <div class="wedding-section-title wedding-form-title-space">
      <h2>{{ t.formTitle }}</h2>
    </div>

    <div class="wedding-form-card">
      <form @submit.prevent="submitForm">
        <div class="wedding-form">
          <div class="wedding-form-group">
            <WeddingInput v-model="formData.fullName" :label="t.nameLabel" required />
          </div>

          <label class="wedding-form-no-attend">
            <input type="checkbox" v-model="notAttending" />
            <span>{{ t.cannotAttend }}</span>
          </label>

          <div class="wedding-form-collapsible" :class="{ collapsed: notAttending }">
            <div v-if="hasInvitadoExtra" class="wedding-form-group">
              <WeddingSelect
                v-model="formData.numberPeople"
                :options="numberPeopleOptions"
                default-value="1"
                :label="t.howManyPeople"
              />
            </div>

            <div class="wedding-form-group">
              <WeddingInput
                v-model="formData.songField"
                :label="t.mustHaveSong"
              />
            </div>

            <div class="wedding-form-group">
              <WeddingTextarea
                v-model="formData.message"
                :label="t.anythingElse"
              />
            </div>
          </div>

          <div class="wedding-form-submit">
            <WeddingButton v-if="!isFormSubmitted">{{ t.sendButton }}</WeddingButton>
            <div v-else class="wedding-form-thanks">
              {{ t.thanksFormSubmitted }}
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
import { ref, computed } from 'vue'
import { t } from '@/locale.js'

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

const getQueryParam = (param) => {
  const search = window.location.search || (window.location.hash.includes('?') ? '?' + window.location.hash.split('?')[1] : '')
  return new URLSearchParams(search).get(param)
}

const hasInvitadoExtra = ref(getQueryParam('invitadoExtra') === 'true')

const numberPeopleOptions = computed(() => [
  { label: t.value.personJustMe, value: 1 },
  { label: t.value.personTwo, value: 2 },
])

const submitForm = () => {
  const phone = import.meta.env.VITE_WHATSAPP_PHONE || '5216623616028'

  let messageText

  if (notAttending.value) {
    messageText = `${t.value.whatsappNotAttending}\n\n`
    messageText += `*${t.value.whatsappName}* ${formData.value.fullName}\n`
  } else {
    const peopleText =
      formData.value.numberPeople === 1
        ? `1 (${t.value.personJustMe})`
        : `${formData.value.numberPeople} ${t.value.personTwo}`

    messageText = `${t.value.whatsappAttending}\n\n`
    messageText += `*${t.value.whatsappName}* ${formData.value.fullName}\n`
    messageText += `*${t.value.whatsappAttendees}* ${peopleText}\n`

    if (formData.value.songField) {
      messageText += `*${t.value.whatsappSong}* ${formData.value.songField}\n`
    }
    if (formData.value.message) {
      messageText += `*${t.value.whatsappNote}* ${formData.value.message}\n`
    }
  }

  const encodedMessage = encodeURIComponent(messageText)
  const whatsappUrl = phone
    ? `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=${encodedMessage}`
    : `https://api.whatsapp.com/send?text=${encodedMessage}`

  window.open(whatsappUrl, '_blank')

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
