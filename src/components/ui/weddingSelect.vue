<template>
  <div class="wedding-select-input">
    <label :for="selectInputId">{{ label }}</label>
    <select :id="selectInputId" v-model="selectedOption" class="styled-select">
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const selectInputId = `custom-input-${Math.floor(Math.random() * 1000000)}`
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  options: {
    type: Array,
    default: () => [],
  },
  defaultValue: {
    type: [String, Number],
    default: '',
  },
})

const selectedOption = ref(props.defaultValue)

const emit = defineEmits(['update:modelValue'])

emit('update:modelValue', selectedOption.value) // Initialize v-model

watchEffect(() => {
  emit('update:modelValue', selectedOption.value)
})
</script>

<style scoped>
.wedding-select-input {
}

label {
  display: block;

  margin-bottom: 1em;
  font-size: 1.2em;
  font-weight: bold;
}

.styled-select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  background-color: #fff;
  color: var(--text-color-primary);
}
</style>
