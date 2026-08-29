import { ref, onUnmounted } from 'vue'

export function useIntersectionObserver(targetRef, options = {}, onIntersect) {
  const hasIntersected = ref(false)
  let observer = null

  const handleIntersection = (entries) => {
    const entry = entries[0]
    if (!hasIntersected.value && entry.isIntersecting) {
      hasIntersected.value = true
      onIntersect()
      observer?.disconnect()
    }
  }

  const observe = () => {
    if (targetRef.value instanceof Element) {
      observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1,
        ...options,
      })
      observer.observe(targetRef.value)
    }
  }

  onUnmounted(() => {
    observer?.disconnect()
  })

  observe()

  return { hasIntersected }
}
