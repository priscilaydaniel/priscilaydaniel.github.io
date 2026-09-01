<!-- Button.vue -->

<template>
  <button
    :class="{ 'wedding-button': true, 'full-width': fullWidth }"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>

<script setup>
const props = defineProps({
  label: { type: String, required: false, default: 'Enviar' },
  fullWidth: { type: Boolean, required: false, default: false },
})
const emit = defineEmits(['button-clicked'])

const handleClick = () => {
  emit('button-clicked')
}
</script>

<style scoped>
.wedding-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0.5em 1.4em;
  font-size: 1.4em;
  background-color: var(--button-color-primary);
  transition: background-color 0.3s ease;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 30px;
  text-transform: uppercase;
  letter-spacing: 4px;
}

.wedding-button:hover {
  background-color: var(--button-color-primary-hover);
}

.full-width {
  width: 100%;
}

@media (max-width: 768px) {
  /* Styles for smaller screens (phones) */
  .wedding-button {
    font-size: 1.2em;
  }
}
</style>
``
