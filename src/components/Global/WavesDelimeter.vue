<script setup>
import { defineProps } from "vue";

defineProps({
  waves: String,
});
</script>

<template>
  <svg
    ref="wavesDelimeterRef"
    id="waves"
    viewBox="0 0 900 200"
    class="absolute bottom-0 left-0 right-0 block px-0"
  >
    <use :href="`src/assets/img/${waves}#wave1`" class="fill-secondary"></use>
    <use :href="`src/assets/img/${waves}#wave2`" class="fill-primary-1/4"></use>
    <use :href="`src/assets/img/${waves}#wave3`" class="fill-primary-1/2"></use>
    <use :href="`src/assets/img/${waves}#wave4`" class="fill-primary-3/4"></use>
    <use :href="`src/assets/img/${waves}#wave5`" class="fill-primary"></use>
  </svg>
</template>
