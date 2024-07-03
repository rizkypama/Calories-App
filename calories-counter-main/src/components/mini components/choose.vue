<template>
  <div class="flex items-center w-full gap-3">
    <slot name="logo"></slot>
    <div class="relative w-full">
      <p class="text-lg font-semibold">{{ title }}</p>
      <slot name="setting"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>