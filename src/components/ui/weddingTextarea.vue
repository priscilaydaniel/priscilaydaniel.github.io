<template>
  <div class="wedding-textarea">
    <label :for="textareaId">{{ label }}</label>
    <div v-if="description" class="wedding-textarea-description">
      {{ description }}
    </div>
    <textarea
      :id="textareaId"
      v-model="textareaValue"
      :placeholder="placeholder"
      :type="type"
      rows="4"
      class="wedding-textarea-field"
    />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps([
  'label',
  'value',
  'placeholder',
  'type',
  'description',
])
const emit = defineEmits(['update:modelValue'])

const textareaId = `custom-textarea-${Math.floor(Math.random() * 1000000)}`
const textareaValue = ref(props.value)

watch(textareaValue, (newValue) => {
  // Emit the textarea value when it changes
  emit('update:modelValue', newValue)
})
</script>

<style scoped>
.wedding-textarea {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 1em;
  font-size: 1.2em;
  font-weight: bold;
}

.wedding-textarea-description {
  margin-bottom: 0.5em;
  font-size: 1em;
}

.wedding-textarea-field {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1em;
  outline: none;
  background-color: white;
  color: var(--text-color-primary);
}
</style>
