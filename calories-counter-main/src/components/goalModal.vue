<script setup>
import primaryButton from "./mini components/primaryButton.vue";
</script>

<template>
  <div
    class="
      fixed
      top-0
      bottom-0
      left-0
      right-0
      z-50
      flex-col
      items-center
      justify-center
      w-screen
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
        overflow-y-scroll
        flex flex-col
        justify-start
        w-[90%]
        md:w-[80%]
        gap-4
        lg:px-64
        px-5
        pt-5
        pb-10
        shadow-xl
        rounded-xl
        h-fit
        dark:bg-gray-900
        bg-white
        relative
        dark:shadow-gray-200 dark:shadow-md
      "
    >
      <button
        v-on:click="closeModal"
        class="absolute pr-10 top-2 w-10 h-10 right-2 border-primary border-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10 dark:fill-gray-200 fill-black"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <h1 class="text-2xl font-semibold self-center">Set Your Goal</h1>
      <div class="flex flex-col max-w-full gap-1">
        <label class="text-xl dark:text-gray-200 text-gray-800" for="genderS"
          >Your Gender</label
        >
        <div class="flex gap-2 items-center text-xl">
          <input
            class="
              appearance-none
              rounded-full
              h-5
              w-5
              border border-gray-800
              bg-white
              checked:bg-primary
              checked:border-black
              checked:ring-inset
              checked:ring-black
              checked:ring-1
              checked:border-2
              transition
              duration-200
              align-top
              bg-no-repeat bg-center bg-contain
              float-left
              cursor-pointer
            "
            v-model="gender"
            type="radio"
            name="male"
            value="male"
            checked
          />
          <label for="male" class="flex items-center gap-2"> Male</label>
          <input
            class="
              appearance-none
              rounded-full
              h-5
              w-5
              border border-gray-800
              bg-white
              checked:bg-primary
              checked:border-black
              checked:ring-inset
              checked:ring-black
              checked:ring-1
              checked:border-2
              transition
              duration-200
              align-top
              bg-no-repeat bg-center bg-contain
              float-left
              cursor-pointer
            "
            v-model="gender"
            type="radio"
            name="female"
            value="female"
          />
          <label for="female" class="flex items-center gap-2"> Female</label>
        </div>
      </div>
      <div class="flex flex-col max-w-full gap-1">
        <label class="text-xl dark:text-gray-200 text-gray-800" for="Age"
          >Your Age</label
        >
        <input
          min="1"
          v-on:input="changeAge($event.target.value)"
          :value="age"
          class="
            border-2 border-primary
            text-xl
            px-4
            py-1
            rounded
            bg-transparent
            focus:outline-none
            text-gray-800
            dark:text-gray-200
          "
          type="number"
          name="Age"
          placeholder="Your Age"
        />
        <div v-if="age <= 0">
          <p class="text-xl text-red-500">Age Must be more than 0</p>
        </div>
      </div>
      <div class="flex max-w-full flex-col gap-1">
        <label class="text-xl dark:text-gray-200 text-gray-800" for="Weight"
          >Your Weight (kg)</label
        >
        <input
          min="1"
          v-on:input="changeWeight($event.target.value)"
          :value="weight"
          class="
            border-2 border-primary
            text-xl
            px-4
            py-1
            rounded
            bg-transparent
            focus:outline-none
            text-gray-800
            dark:text-gray-200
          "
          type="number"
          name="Weight"
          placeholder="Your Weight"
        />
        <div v-if="weight <= 0">
          <p class="text-xl text-red-500">Weight Must be more than 0</p>
        </div>
      </div>
      <div class="flex max-w-full flex-col gap-1">
        <label class="text-xl dark:text-gray-200 text-gray-800" for="Height"
          >Your Height (cm)</label
        >
        <input
          min="1"
          v-on:input="changeHeight($event.target.value)"
          :value="height"
          class="
            border-2 border-primary
            text-xl
            px-4
            py-1
            rounded
            bg-transparent
            focus:outline-none
            text-gray-800
            dark:text-gray-200
          "
          type="number"
          name="Height"
          placeholder="your Height"
        />
        <div v-if="height <= 0">
          <p class="text-xl text-red-500">Height Must be more than 0</p>
        </div>
      </div>

      <div class="flex max-w-full flex-col gap-1">
        <label class="text-xl dark:text-gray-200 text-gray-800" for="activity"
          >Your Activity</label
        >
        <select
          v-on:change="activity = $event.target.value"
          :value="activity"
          class="
            w-full
            h-10
            px-5
            dark:bg-gray-900
            bg-white
            outline-none
            appearance-none
            focus:border-primary
            dark:bg-bg_dark
            focus:outline-none
            active:outline-none
            border-2 border-primary
            text-xl
            py-1
            rounded
            bg-transparent
            text-gray-800
            dark:text-gray-200
          "
          name="activity"
          id=""
        >
          <option class="text-sm md:text-lg" value="1.2">
            Sedentary(Office Job)
          </option>
          <option class="text-sm md:text-lg" value="1.375">
            Lightly Exercise (1-2 days/week)
          </option>
          <option class="text-sm md:text-lg" value="1.55">
            Moderate Exercise (3-5 days/week)
          </option>
          <option class="text-sm md:text-lg" value="1.725">
            Heavy Exercise (6-7 days/week)
          </option>
          <option class="text-sm md:text-lg" value="1.9">
            Athlete 2x per day
          </option>
        </select>
      </div>
      <div class="flex max-w-full flex-col gap-1">
        <label class="text-xl dark:text-gray-200 text-gray-800" for="Goal"
          >Your Goal</label
        >
        <select
          v-on:change="goal = $event.target.value"
          :value="goal"
          class="
            w-full
            h-10
            px-5
            dark:bg-gray-900
            bg-white
            outline-none
            appearance-none
            focus:border-primary
            dark:bg-bg_dark
            focus:outline-none
            active:outline-none
            border-2 border-primary
            text-xl
            py-1
            rounded
            bg-transparent
            text-gray-800
            dark:text-gray-200
          "
          name="Goal"
          id=""
        >
          <option class="text-sm md:text-lg" value="-500">Cutting</option>
          <option class="text-sm md:text-lg" value="500">Bulking</option>
          <option class="text-sm md:text-lg" value="0">Maintain</option>
        </select>
      </div>
      <primaryButton class="mt-5" title="Set Goal" v-on:click="submitGoal">
        Set Goal
      </primaryButton>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: 1,
      weight: 1,
      height: 1,
      gender: "male",
      activity: 1.2,
      goal: 0,
    };
  },
  props: ["showModal", "closeModal"],
  methods: {
    changeAge(value) {
      this.age = Math.abs(value);
    },
    changeWeight(value) {
      this.weight = Math.abs(value);
    },
    changeHeight(value) {
      this.height = Math.abs(value);
    },
    submitGoal() {
      console.log(this.activity);
      console.log(this.goal);
      if (this.gender === "male") {
        const bmr =
          88.362 +
          13.397 * this.weight +
          4.799 * this.height -
          5.677 * this.age;
        localStorage.setItem(
          "goal",
          JSON.stringify(
            parseInt(bmr * parseFloat(this.activity) + parseInt(this.goal))
          )
        );
        this.$router.push(`/`);
      } else {
        const bmr =
          447.593 + 9.247 * this.weight + 3.098 * this.height - 4.33 * this.age;
        localStorage.setItem(
          "goal",
          JSON.stringify(
            parseInt(bmr * parseFloat(this.activity) + parseInt(this.goal))
          )
        );
        this.$router.push(`/`);
      }
    },
  },
};
</script>