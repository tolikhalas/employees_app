<script setup>
import { computed, onMounted, ref } from "vue";

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
    // Request an svg
    const svgRequest = new Request(`/src/assets/img/${waves}.svg`);
    const svgHeaders = new Headers();
    svgHeaders.append("Accept", "image/svg+xml");
    const svgResponse = await fetch(svgRequest, svgHeaders);

    // Parsing svg
    const svgModule = await svgResponse.blob();
    const svgText = await svgModule.text();
    const parser = new DOMParser();
    const svgContent = parser.parseFromString(svgText, "image/svg+xml");
    svgElement.value = svgContent.documentElement;
  } catch (err) {
    console.error(`Error loading SVG: ${err}`);
  }
};

// Paths' methods
const pathElements = computed(() => {
  if (svgElement.value) {
    return Array.from(svgElement.value.querySelectorAll("path"));
  }
});

const calculateViewBox = computed(() => {
  if (svgElement.value) {
    let viewBox = svgElement.value.getAttribute("viewBox").split(" ");
    const viewBoxHeight = viewBox.at(-1);
    viewBox[viewBox.length - 1] = viewBoxHeight < 160 ? viewBoxHeight : 160;
    return viewBox;
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
      : index === length
        ? "fill-primary"
        : index / length === 0.5
          ? "fill-primary-1/2"
          : `fill-primary-${String(index)}/${String(length)}`;
};
</script>

<template>
  <svg
    :viewBox="calculateViewBox"
    class="waves absolute bottom-0 left-0 right-0 block px-0"
  >
    <path
      v-for="(path, index) in pathElements"
      :key="index"
      :d="path.getAttribute('d')"
      :opacity="calculateOpacity(path)"
      :class="
        calculateDynamicClasses(monochrome, index, pathElements.length - 1)
      "
    />
  </svg>
</template>
