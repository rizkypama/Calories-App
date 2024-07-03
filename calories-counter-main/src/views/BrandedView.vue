<script setup>
import Layout from "../components/Layout.vue";
import nutritionTable from "../components/mini components/nutritionTable.vue";
import nutritionInformation from "../components/mini components/nutritionInformation.vue";
import primaryButton from "../components/mini components/primaryButton.vue";
import axios from "axios";
</script>

<template>
  <Layout :title="data?.food_name">
    <div class="py-10 w-full flex flex-col gap-10">
      <div class="w-full flex lg:flex-row flex-col items-center gap-5">
        <img class="w-28" :src="data?.photo?.thumb" :alt="data?.food_name" />
        <div class="lg:w-96 mb-3 md:mb-0">
          <div class="input-group relative flex-row flex items-stretch w-full">
            <input
              :value="amount"
              @input="amount = $event.target.value"
              type="number"
              name="amount"
              placeholder="amount"
              id="amount"
              class="
                form-control
                relative
                flex-auto
                min-w-0
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid
                rounded-l
                border-gray-300
                transition
                ease-in-out
                m-0
                focus:text-gray-700
                focus:bg-white
                focus:border-primary
                focus:outline-none
              "
            />
            <select
              name="unit"
              :value="servingUnit"
              @input="changeValue($event.target.value)"
              class="
                inline-block
                px-2
                py-2.5
                bg-primary
                text-white
                font-medium
                text-xl
                leading-tight
                hover:bg-secondary
                rounded-r
                focus:outline-none focus:ring-0
                transition
                duration-150
                ease-in-out
                items-center
              "
              id="unit"
            >
              <option disabled value>serving unit</option>
              <option :value="defaultServingUnit">
                {{ defaultServingUnit }}
              </option>
              <option value="g">g</option>
            </select>
          </div>
        </div>
        <primaryButton title="add" class="capitalize text-xl"></primaryButton>
        <div v-if="servingUnit === 'g'" class="w-full">
          <nutritionTable
            firstNutrition="Calorie"
            :firstAmount="
              (
                (data?.nf_calories * amount) /
                data?.serving_weight_grams
              ).toFixed(2)
            "
            firstUnit="cal"
            secondNutrition="Carbs"
            :secondAmount="
              (
                (data?.nf_total_carbohydrate * amount) /
                data?.serving_weight_grams
              ).toFixed(2)
            "
            secondUnit="gr"
            thirdNutrition="Protein"
            :thirdAmount="
              (
                (data?.nf_protein * amount) /
                data?.serving_weight_grams
              ).toFixed(2)
            "
            thirdUnit="gr"
            fourthNutrition="Fat"
            :fourthAmount="
              (
                (data?.nf_total_fat * amount) /
                data?.serving_weight_grams
              ).toFixed(2)
            "
            fourthUnit="gr"
          >
          </nutritionTable>
        </div>
        <div v-else class="w-full">
          <nutritionTable
            firstNutrition="Calorie"
            :firstAmount="(data?.nf_calories * amount).toFixed(2)"
            firstUnit="cal"
            secondNutrition="Carbs"
            :secondAmount="(data?.nf_total_carbohydrate * amount).toFixed(2)"
            secondUnit="gr"
            thirdNutrition="Protein"
            :thirdAmount="(data?.nf_protein * amount).toFixed(2)"
            thirdUnit="gr"
            fourthNutrition="Fat"
            :fourthAmount="(data?.nf_total_fat * amount).toFixed(2)"
            fourthUnit="gr"
          >
          </nutritionTable>
        </div>
      </div>
      <div v-if="servingUnit === 'g'" class="w-full">
        <nutritionInformation
          :sugar="(data?.nf_sugars * amount /
                data?.serving_weight_grams).toFixed(2)"
          :cholesterol="(data?.nf_cholesterol * amount /
                data?.serving_weight_grams).toFixed(2)"
          :sodium="(data?.nf_sodium * amount /
                data?.serving_weight_grams).toFixed(2)"
          :potassium="(data?.nf_potassium * amount /
                data?.serving_weight_grams).toFixed(2)"
        ></nutritionInformation>
      </div>
      <div v-else class="w-full">
        <nutritionInformation
          :sugar="(data?.nf_sugars * amount).toFixed(2)"
          :cholesterol="(data?.nf_cholesterol * amount).toFixed(2)"
          :sodium="(data?.nf_sodium * amount).toFixed(2)"
          :potassium="(data?.nf_potassium * amount).toFixed(2)"
        ></nutritionInformation>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return { data: [], amount: 1, servingUnit: "g", defaultServingUnit: "" };
  },
  mounted() {
    axios
      .get(
        `https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${this.$route.params.id}`,
        {
          headers: {
            "x-app-id": "9ff7947b",
            "x-app-key": "50c66e23b3793fd3558d8af37c07c910",
          },
        }
      )
      .then((res) => {
        console.log(res);
        this.data = res.data.foods[0];
        this.defaultServingUnit = res.data.foods[0].serving_unit;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    changeValue(value) {
      this.servingUnit = value;
      console.log(this.servingUnit);
    },
  },
};
</script>