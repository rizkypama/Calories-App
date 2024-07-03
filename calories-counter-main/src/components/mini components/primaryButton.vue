<template>
    <button
        class="bg-primary hover:bg-secondary transition-all duration-200 px-5 py-1 rounded font-semibold text-2xl text-white self-center"
    >{{ title }}</button>
</template>

<script>
export default {
    props: ['title']
}
</script>