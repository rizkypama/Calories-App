<template>
    <div
        class="w-full rounded h-full md:h-[80%] gap-2 py-2 px-7 text-gray-200 justify-center justify-items-center items-center bg-secondary grid grid-cols-2">
        <div class="flex flex-col items-center justify-center">
            <p class="text-xl text-gray-200">{{ firstNutrition }}</p>
            <p class="text-xl text-gray-100">
                <span class="text-4xl font-bold">{{ firstAmount }}</span>
                {{ firstUnit }}
            </p>
        </div>
        <div class="flex flex-col items-center justify-center">
            <p class="text-xl text-gray-200">{{ secondNutrition }}</p>
            <p class="text-xl text-gray-100">
                <span class="text-4xl font-bold">{{ secondAmount }}</span>
                {{ secondUnit }}
            </p>
        </div>
        <div class="flex flex-col items-center justify-center">
            <p class="text-xl text-gray-200">{{ thirdNutrition }}</p>
            <p class="text-xl text-gray-100">
                <span class="text-4xl font-bold">{{ thirdAmount }}</span>
                {{ thirdUnit }}
            </p>
        </div>
        <div class="flex flex-col items-center justify-center">
            <p class="text-xl text-gray-200">{{ fourthNutrition }}</p>
            <p class="text-xl text-gray-100">
                <span class="text-4xl font-bold">{{ fourthAmount }}</span>
                {{ fourthUnit }}
            </p>
        </div>  </div>
</template>
<script>
export default {
    props: ['firstNutrition', 'firstAmount', 'firstUnit', 'secondNutrition', 'secondAmount', 'secondUnit', 'thirdNutrition', 'thirdAmount', 'thirdUnit', 'fourthNutrition', 'fourthAmount', 'fourthUnit']
}
</script>