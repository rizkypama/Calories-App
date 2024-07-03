<script setup>
import Layout from "../components/Layout.vue";
import meal from "../components/mini components/meal.vue";
import primaryButton from "../components/mini components/primaryButton.vue";
import nutritionTable from "../components/mini components/nutritionTable.vue";
</script>

<template>
  <Layout title="Dashborad">
    <div class="w-full md:py-10 py-5 h-full">
      <div
        class="flex flex-col md:flex-row w-full h-full gap-10 justify-between"
      >
        <div class="w-full flex flex-col gap-5">
          <h1 class="text-xl font-semibold">Your Calories</h1>
          <div class="flex lg:flex-row flex-col items-center">
            <div class="w-1/2 h-64 rotate-180 relative">
              <div
                :style="{
                  height: `${
                    parseInt((calorie / goal) * 100) > 100
                      ? 100
                      : parseInt((calorie / goal) * 100)
                  }%`,
                }"
                v-bind:class="{ 'bg-rose-500': calorie > goal }"
                class="w-full absolute md:rounded-r rounded-b bg-primary"
              ></div>
              <div
                class="
                  py-10
                  rotate-180
                  flex flex-col
                  items-center
                  justify-center
                "
              >
                <p class="text-black dark:text-white">Goal {{ goal }} Cal</p>
                <p class="text-black dark:text-white">
                  <span class="text-4xl font-bold text-black dark:text-white">{{
                    parseInt(calorie)
                  }}</span>
                  Cal
                </p>
                <div v-if="calorie > goal">
                  <p class="text-black dark:text-white">Too Much Calorie</p>
                </div>
                <div v-else>
                  <p class="text-black dark:text-white">
                    {{ parseInt(goal - calorie) }} cal remaining
                  </p>
                </div>
              </div>
            </div>
            <nutritionTable
              firstNutrition="Proteins"
              :firstAmount="protein.toFixed(2)"
              firstUnit="gr"
              secondNutrition="Carbs"
              :secondAmount="carbs.toFixed(2)"
              secondUnit="gr"
              thirdNutrition="Fat"
              :thirdAmount="fat.toFixed(2)"
              thirdUnit="gr"
              fourthNutrition="Sugar"
              :fourthAmount="sugar.toFixed(2)"
              fourthUnit="gr"
            ></nutritionTable>
          </div>
        </div>

        <div class="w-full flex flex-col gap-5">
          <h1 class="text-xl font-semibold">Your Meals</h1>
          <div class="flex w-full flex-col gap-3" v-if="data">
            <meal
              v-for="item in data"
              :key="item.name"
              :title="item.name"
              :image="item.photo"
              :portion="`${item.serving} ${item.servingUnit}`"
              :calorie="parseInt(item.calorie)"
              :haveDelete="true"
              :idMeal="item.id"
              @deleteMeal="deleteMeal"
            ></meal>
          </div>
          <primaryButton v-on:click="clearMeal" title="clear"></primaryButton>
        </div>
      </div></div
  ></Layout>
</template>

<script>
export default {
  data() {
    return {
      data: JSON.parse(localStorage.getItem("common meals")),
      calorie: 0,
      carbs: 0,
      protein: 0,
      fat: 0,
      sugar: 0,
      goal: JSON.parse(localStorage.getItem("goal")),
    };
  },
  mounted() {
    if (
      localStorage.getItem("common meals") === null ||
      JSON.parse(localStorage.getItem("common meals")).length === 0
    ) {
      return;
    } else {
      // Calorie
      const calorieArray = [];
      this.data.map((data) => calorieArray.push(data.calorie));
      this.calorie = calorieArray.reduce((a, b) => a + b);
      // Carbs
      const carbsArray = [];
      this.data.map((data) => carbsArray.push(data.carbs));
      this.carbs = carbsArray.reduce((a, b) => a + b);
      // protein
      const proteinArray = [];
      this.data.map((data) => proteinArray.push(data.protein));
      this.protein = proteinArray.reduce((a, b) => a + b);
      // fat
      const fatArray = [];
      this.data.map((data) => fatArray.push(data.fat));
      this.fat = fatArray.reduce((a, b) => a + b);
      // sugar
      const sugarArray = [];
      this.data.map((data) => sugarArray.push(data.sugar));
      this.sugar = sugarArray.reduce((a, b) => a + b);
    }
  },
  methods: {
    deleteMeal(id) {
      const lastData = JSON.parse(localStorage.getItem("common meals"));
      const dataALl = lastData.filter((data) => data.id !== id);
      localStorage.setItem("common meals", JSON.stringify(dataALl));
      window.location.reload();
    },
    clearMeal() {
      localStorage.removeItem("common meals");
      window.location.reload();
    },
  },
};
</script>
