<script setup>
import Layout from "../components/Layout.vue";
import choose from "../components/mini components/choose.vue";
import goalModal from "../components/goalModal.vue";
</script>

<template>
  <Layout title="Settings">
    <div class="my-5 flex flex-col gap-3">
      <choose title="Select Theme">
        <template v-slot:logo
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-20 h-20"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="{2}"
            fill="none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            /></svg
        ></template>
        <template v-slot:setting
          ><select
            v-on:change="changeTheme($event.target.value)"
            class="
              w-full
              h-10
              px-5
              text-center
              dark:bg-gray-900
              bg-white
              border-2 border-gray-400
              rounded-lg
              outline-none
              appearance-none
              focus:border-primary
              dark:bg-bg_dark
              focus:outline-none
              active:outline-none
            "
            :value="theme"
          >
            <option value="dark">dark</option>
            <option value="light">light</option>
          </select>
        </template>
      </choose>
      <choose title="Set Goal">
        <template v-slot:logo
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-20 h-20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="{2}"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
            /></svg
        ></template>
        <template v-slot:setting
          ><button
            v-on:click="handleShowModal"
            class="
              w-full
              h-10
              px-5
              text-center
              dark:bg-gray-900
              bg-white
              border-2 border-gray-400
              rounded-lg
              outline-none
              appearance-none
              focus:border-primary focus:outline-none
              active:outline-none
            "
          >
            Set
          </button>
        </template>
      </choose>
    </div>
    <goalModal
      :closeModal="handleCloseModal"
      :showModal="showModal"
    ></goalModal>
  </Layout>
</template>

<script>
export default {
  data() {
    return {
      theme: localStorage.getItem("theme"),
      showModal: false,
    };
  },
  methods: {
    changeTheme(value) {
      localStorage.setItem("theme", value);
      if (localStorage.getItem("theme") === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    handleShowModal() {
      this.showModal = true;
    },
    handleCloseModal() {
      this.showModal = false;
    },
  },
};
</script>