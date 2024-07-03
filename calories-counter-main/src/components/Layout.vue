<template>
  <div
    class="
      overflow-hidden
      md:ml-20
      dark:bg-gray-900
      px-5
      md:px-10
      py-5
      pb-24
      min-h-screen
      md:py-10
      text-gray-700
      dark:text-gray-300
    "
  >
    <h1 class="text-3xl font-semibold">{{ title }}</h1>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>