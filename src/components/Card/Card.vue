<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({
  title: { type: String, default: null }
})

const cardRef = ref(null)

defineExpose({
  cardRef
})

</script>

<template>
  <div class="card" ref="cardRef">
    <h3 v-if="title != null">{{ title }}</h3>
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  box-sizing: border-box;
  padding: 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: var(--bg-color);
  border-radius: 20px;
  margin-bottom: 10px;
  box-shadow: var(--shadow-l1);
}
.card h3 {
  margin-bottom: 10px;
}
</style>
