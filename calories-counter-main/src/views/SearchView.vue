<script setup>
import Layout from "../components/Layout.vue";
import meal from "../components/mini components/meal.vue";
import Loading from "../components/mini components/loading.vue";
import axios from "axios";
</script>

<template>
  <Layout title="Find Your Meal">
    <div class="w-full flex flex-col md:py-10 py-5">
      <div class="mb-3 md:w-96">
        <div
          class="input-group relative flex-row flex items-stretch w-full mb-4"
        >
          <input
            type="search"
            :value="value"
            @keyup.enter="fetchData()"
            @input="(event) => (value = event.target.value)"
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
            placeholder="find your meal"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          <button
            v-on:click="fetchData()"
            class="
              inline-block
              px-6
              py-2.5
              bg-primary
              text-white
              font-medium
              text-xs
              leading-tight
              uppercase
              shadow-md
              hover:bg-secondary hover:shadow-lg
              rounded-r
              focus:shadow-lg focus:outline-none focus:ring-0
              active:shadow-lg
              transition
              duration-200
              ease-in-out
              items-center
            "
            type="button"
            id="button-addon2"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="search"
              class="w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div v-if="error === true">
        <p class="text-xl font-bold text-red-700">{{ errorValue }}</p>
      </div>
      <div v-if="loading" class="flex w-full gap-5 flex-col md:flex-row">
        <div class="flex flex-col gap-5 w-full">
          <Loading></Loading>
          <Loading></Loading>
          <Loading></Loading>
          <Loading></Loading>
        </div>
        <div class="flex flex-col gap-5 w-full">
          <Loading></Loading>
          <Loading></Loading>
          <Loading></Loading>
          <Loading></Loading>
        </div>
      </div>
      <div
        v-if="success && loading === false"
        class="flex w-full gap-5 flex-col md:flex-row"
      >
        <div v-if="data?.common?.length > 0" class="flex flex-col gap-5 w-full">
          <h1 class="text-2xl font-semibold mb-2">Common</h1>
          <meal
            :key="item.food_name"
            v-for="item in data?.common"
            :title="item.food_name"
            :portion="`${item.serving_qty} ${item.serving_unit}`"
            :image="item.photo.thumb"
            :haveDelete="false"
            @click.prevent="handleClickDetailsCommon(item.food_name)"
          ></meal>
        </div>
        <div v-else>
          <h1 class="text-2xl font-semibold text-red-400 mb-2">
            Common Food Not Found
          </h1>
        </div>
        <div
          v-if="data?.branded?.length > 0"
          class="flex flex-col gap-5 w-full"
        >
          <h1 class="text-2xl font-semibold mb-2">Branded</h1>
          <meal
            v-for="item in data?.branded"
            :key="item.food_name"
            :title="item.food_name"
            :portion="`${item.serving_qty} ${item.serving_unit}`"
            :image="item.photo.thumb"
            :haveDelete="false"
            @click.prevent="handleClickDetailsBranded(item.nix_item_id)"
          ></meal>
        </div>
        <div v-else>
          <h1 class="text-2xl font-semibold text-red-400 mb-2">
            Branded Food Not Found
          </h1>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      value: "",
      error: false,
      errorValue: "",
      success: false,
      loading: false,
    };
  },
  methods: {
    fetchData() {
      this.loading = true;
      axios
        .get(
          `https://trackapi.nutritionix.com/v2/search/instant?query=${this.value}`,
          {
            headers: {
              "x-app-id": "9ff7947b",
              "x-app-key": "50c66e23b3793fd3558d8af37c07c910",
            },
          }
        )
        .then((res) => {
          this.data = res.data;
          this.error = false;
          this.loading = false;
          this.success = true;
        })
        .catch((err) => {
          this.error = true;
          this.errorValue = err;
          this.data = [];
          this.loading = false;
        });
      this.value = "";
    },
    handleClickDetailsCommon(value) {
      this.$router.push(`/common/${value}`);
    },
    handleClickDetailsBranded(value) {
      this.$router.push(`/branded/${value}`);
    },
  },
};
</script>