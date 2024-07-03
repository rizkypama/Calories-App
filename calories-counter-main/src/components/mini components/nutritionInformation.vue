<template>
  <div class="w-full flex font-medium capitalize py-2 text-lg flex-col h-fit">
    <div class="flex py-2 w-full justify-between border-b-2 border-accent">
      <p>Sugar</p>
      <p>{{ sugar }}gr</p>
    </div>
    <div class="flex py-2 w-full justify-between border-b-2 border-accent">
      <p>cholesterol</p>
      <p>{{ cholesterol }}mg</p>
    </div>
    <div class="flex py-2 w-full justify-between border-b-2 border-accent">
      <p>sodium</p>
      <p>{{ sodium }}mg</p>
    </div>
    <div class="flex py-2 w-full justify-between border-b-2 border-accent">
      <p>potassium</p>
      <p>{{ potassium }}mg</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["sugar", "cholesterol", "sodium", "potassium"],
};
</script>