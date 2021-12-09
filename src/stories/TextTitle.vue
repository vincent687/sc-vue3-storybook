<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { computed } from "vue";

const props = defineProps<{
  detail: string;
  status: string;
}>();

// const textClasses = computed(() => ({
//   [`hover:text-green-400`]: status === "success" ? true : false,
//   [`hover:text-red-400`]: status === "danger" ? true : false,
// }));
</script>

<template>
  <div v-if="status === 'success'" className="hover:text-green-400">
    <h2 className="text-lg font-semibold">
      {{ detail }}
    </h2>
  </div>
  <div v-else-if="status === 'danger'" className="hover:text-red-400">
    <h2 className="text-lg font-semibold">
      {{ detail }}
    </h2>
  </div>
  <div v-else className="hover:text-blue-400">
    <h2 className="text-lg font-semibold">
      {{ detail }}
    </h2>
  </div>
</template>
