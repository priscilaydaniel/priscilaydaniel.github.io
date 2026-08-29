<template>
  <div class="wedding-input">
    <label :for="inputId">{{ label }}</label>
    <input
      :id="inputId"
      v-model="inputValue"
      :placeholder="placeholder"
      :type="type"
      :required="required"
      class="wedding-input-field"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  required: {
    type: Boolean,
    default: false,
  },
})

const inputId = `custom-input-${Math.floor(Math.random() * 1000000)}`
const inputValue = ref(props.value)

watch(inputValue, (newValue) => {
  // Emit the input value when it changes
  emit('update:modelValue', newValue)
})
</script>

<style scoped>
.wedding-input {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 1em;
  font-size: 1.2em;
  font-weight: bold;
}

.wedding-input-field {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1em;
  outline: none;
  background-color: white;
  color: var(--text-color-primary);
}
</style>
