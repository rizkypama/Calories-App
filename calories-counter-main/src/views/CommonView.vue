<script setup>
import axios from "axios";
import Layout from "../components/Layout.vue";
import primaryButton from "../components/mini components/primaryButton.vue";
import nutritionTable from "../components/mini components/nutritionTable.vue";
import nutritionInformation from "../components/mini components/nutritionInformation.vue";
</script>

<template>
  <Layout :title="$route.params.id">
    <div class="py-10 w-full flex flex-col gap-10">
      <div class="w-full flex lg:flex-row flex-col items-center gap-5">
        <img class="w-28" :src="photo" :alt="name" />
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
              <option value="oz">oz</option>
              <option value="g">g</option>
            </select>
          </div>
        </div>
        <primaryButton
          v-on:click="submitMeals"
          title="add"
          class="capitalize text-xl"
        ></primaryButton>
        <div v-if="servingUnit === 'g'" class="w-full">
          <nutritionTable
            firstNutrition="Calorie"
            :firstAmount="(calorie * amount).toFixed(2)"
            firstUnit="cal"
            secondNutrition="Carbs"
            :secondAmount="(carbs * amount).toFixed(2)"
            secondUnit="gr"
            thirdNutrition="Protein"
            :thirdAmount="(protein * amount).toFixed(2)"
            thirdUnit="gr"
            fourthNutrition="Fat"
            :fourthAmount="(fat * amount).toFixed(2)"
            fourthUnit="gr"
          >
          </nutritionTable>
        </div>
        <div v-else class="w-full">
          <nutritionTable
            firstNutrition="Calorie"
            :firstAmount="(calorie * amount * 28.3495).toFixed(2)"
            firstUnit="cal"
            secondNutrition="Carbs"
            :secondAmount="(carbs * amount * 28.3495).toFixed(2)"
            secondUnit="gr"
            thirdNutrition="Protein"
            :thirdAmount="(protein * amount * 28.3495).toFixed(2)"
            thirdUnit="gr"
            fourthNutrition="Fat"
            :fourthAmount="(fat * amount * 28.3495).toFixed(2)"
            fourthUnit="gr"
          >
          </nutritionTable>
        </div>
      </div>
      <div v-if="servingUnit === 'g'" class="w-full">
        <nutritionInformation
          :sugar="(sugar * amount).toFixed(2)"
          :cholesterol="(cholesterol * amount).toFixed(2)"
          :sodium="(sodium * amount).toFixed(2)"
          :potassium="(potassium * amount).toFixed(2)"
        ></nutritionInformation>
      </div>
      <div v-else class="w-full">
        <nutritionInformation
          :sugar="(sugar * amount * 28.3495).toFixed(2)"
          :cholesterol="(cholesterol * amount * 28.3495).toFixed(2)"
          :sodium="(sodium * amount * 28.3495).toFixed(2)"
          :potassium="(potassium * amount * 28.3495).toFixed(2)"
        ></nutritionInformation>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      dataGram: {},
      dataOz: {},
      amount: 1,
      servingUnit: "oz",
      calorie: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      sugar: 0,
      cholesterol: 0,
      sodium: 0,
      potassium: 0,
      name: "",
      photo: "",
    };
  },
  mounted() {
    const params = { query: `1g ${this.$route.params.id}` };
    axios
      .post(`https://trackapi.nutritionix.com/v2/natural/nutrients`, params, {
        headers: {
          "x-app-id": "9ff7947b",
          "x-app-key": "50c66e23b3793fd3558d8af37c07c910",
        },
      })
      .then((res) => {
        this.name = res.data.foods[0].food_name;
        this.photo = res.data.foods[0].photo.thumb;
        this.calorie = res.data.foods[0].nf_calories;
        this.protein = res.data.foods[0].nf_protein;
        this.carbs = res.data.foods[0].nf_total_carbohydrate;
        this.fat = res.data.foods[0].nf_total_fat;
        this.sugar = res.data.foods[0].nf_sugars;
        this.cholesterol = res.data.foods[0].nf_cholesterol;
        this.sodium = res.data.foods[0].nf_sodium;
        this.potassium = res.data.foods[0].nf_potassium;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    changeValue(value) {
      this.servingUnit = value;
    },
    submitMeals() {
      this.dataGram = {
        name: this.name,
        photo: this.photo,
        serving: this.amount,
        servingUnit: this.servingUnit,
        calorie: parseFloat((this.calorie * this.amount).toFixed(2)),
        protein: parseFloat((this.protein * this.amount).toFixed(2)),
        carbs: parseFloat((this.carbs * this.amount).toFixed(2)),
        fat: parseFloat((this.fat * this.amount).toFixed(2)),
        cholesterol: parseFloat((this.cholesterol * this.amount).toFixed(2)),
        sodium: parseFloat((this.sodium * this.amount).toFixed(2)),
        potassium: parseFloat((this.potassium * this.amount).toFixed(2)),
        sugar: parseFloat((this.sugar * this.amount).toFixed(2)),
        id: +new Date(),
      };
      this.dataOz = {
        name: this.name,
        photo: this.photo,
        serving: this.amount,
        servingUnit: this.servingUnit,
        calorie: parseFloat((this.calorie * this.amount * 28.3495).toFixed(2)),
        protein: parseFloat((this.protein * this.amount * 28.3495).toFixed(2)),
        carbs: parseFloat((this.carbs * this.amount * 28.3495).toFixed(2)),
        fat: parseFloat((this.fat * this.amount * 28.3495).toFixed(2)),
        cholesterol: parseFloat(
          (this.cholesterol * this.amount * 28.3495).toFixed(2)
        ),
        sodium: parseFloat((this.sodium * this.amount * 28.3495).toFixed(2)),
        potassium: parseFloat(
          (this.potassium * this.amount * 28.3495).toFixed(2)
        ),
        sugar: parseFloat((this.sugar * this.amount * 28.3495).toFixed(2)),
        id: +new Date(),
      };
      if (localStorage.getItem("common meals") === null) {
        if (this.servingUnit === "g") {
          localStorage.setItem("common meals", JSON.stringify([this.dataGram]));
        } else {
          localStorage.setItem("common meals", JSON.stringify([this.dataOz]));
        }
      } else {
        console.log("else");
        if (this.servingUnit === "g") {
          const lastData = JSON.parse(localStorage.getItem("common meals"));
          localStorage.setItem(
            "common meals",
            JSON.stringify([...lastData, this.dataGram])
          );
        } else {
          const lastData = JSON.parse(localStorage.getItem("common meals"));
          localStorage.setItem(
            "common meals",
            JSON.stringify([...lastData, this.dataOz])
          );
        }
      }
      this.$router.push("/");
    },
  },
};
</script>