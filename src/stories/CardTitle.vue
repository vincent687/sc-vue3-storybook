<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { computed } from "vue";

const props = defineProps<{
  detail: string;
  hoverTextColor: string;
}>();

const textClasses = computed(() => ({
  [`hover:text-${props.hoverTextColor}-400`]: true,
}));
</script>

<template>
  <div :class="textClasses">
    <h2 class="text-lg font-semibold">
      {{ detail }}
    </h2>
  </div>
</template>
