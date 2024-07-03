<template>
  <div
    class="
      container
      fixed
      top-0
      bottom-0
      left-0
      right-0
      z-50
      flex-col
      items-center
      justify-center
      w-full
      max-w-[800px]
      h-screen
      py-10
      mx-auto
      bg-black/40
      flex
    "
    v-bind:class="{ flex: showModal, hidden: !showModal }"
  >
    <div
      class="
        flex flex-col
        items-center
        justify-center
        w-[80%]
        gap-5
        px-10
        py-5
        shadow-xl
        rounded-xl
        h-[30%]
        bg-primary
      "
    >
      <p class="text-2xl text-center text-white">{props.title}</p>
      <div class="flex items-center justify-center w-full gap-5">
        <button
          class="px-5 py-1 text-xl text-center text-white rounded-xl bg-accent"
        >
          No
        </button>
        <button
          class="px-5 py-1 text-xl text-center text-white rounded-xl bg-accent"
        >
          Yes
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default { props: ["showModal"] };
</script>