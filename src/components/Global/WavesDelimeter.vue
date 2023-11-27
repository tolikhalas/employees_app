<script setup>
import { computed, defineProps, onMounted, ref } from "vue";

// WavesDeilmeter props
const { waves } = defineProps({
  waves: {
    type: String,
    required: true,
  },
  monochrome: String,
});

// Lifecycle hooks
onMounted(() => {
  loadSvg();
});

// Svg loading
const svgElement = ref(null);

const loadSvg = async () => {
  try {
    const svgRequest = new Request(`/src/assets/img/${waves}.svg`);
    const svgHeaders = new Headers();
    svgHeaders.append("Accept", "image/svg+xml");
    const svgResponse = await fetch(svgRequest, svgHeaders);
    const svgModule = await svgResponse.blob();
    const svgText = await svgModule.text();
    const parser = new DOMParser();
    const svgContent = parser.parseFromString(svgText, "image/svg+xml");
    svgElement.value = svgContent.documentElement;
  } catch (err) {
    console.error(`Error loading SVG: ${err}`);
  }
};

// Paths
const pathElements = computed(() => {
  if (svgElement.value) {
    return Array.from(svgElement.value.querySelectorAll("path"));
  }
});

const calculateViewBox = computed(() => {
  if (svgElement.value) {
    return svgElement.value.getAttribute("viewBox");
  }
});

const calculateOpacity = (path) => {
  return path.getAttribute("opacity") ?? "1";
};

const calculateDynamicClasses = (monochrome, index, length) => {
  return monochrome
    ? monochrome
    : index === 0
      ? "fill-secondary"
      : index === length - 1
        ? "fill-primary"
        : `fill-primary-${index + 1}/${length}`;
};
</script>

<template>
  <svg
    id="waves"
    :viewBox="calculateViewBox"
    class="absolute bottom-0 left-0 right-0 block px-0"
  >
    <path
      v-for="(path, index) in pathElements"
      :key="index"
      :d="path.getAttribute('d')"
      :opacity="calculateOpacity(path)"
      :class="calculateDynamicClasses(monochrome, index, pathElements.length)"
    />
  </svg>
</template>
