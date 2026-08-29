<template>
  <a :href="to" class="wedding-link" target="_blank">
    <slot></slot>
  </a>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.wedding-link {
  display: inline-block;

  background-color: var(--link-color-primary);
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  padding: 0.5em 1.2em;
  font-size: 1.2em;
  background-color: var(--button-color-primary);
  color: #fff;
  border-radius: 30px;
  text-transform: uppercase;
  letter-spacing: 4px;
}

.wedding-link:hover {
  background-color: var(--link-color-primary-hover);
}

@media (max-width: 768px) {
  /* Styles for smaller screens (phones) */
  .wedding-link {
    font-size: 1.2em;
  }
}
</style>
