module.exports = {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                Poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                primary: "#50FFB1",
                secondary: "#4FB286",
                secAccent: "#546D64",
                dark: "#4D685A",
                accent: "#3C896D",
            },
        },
    },
    plugins: [require("tailwindcss"), require("autoprefixer")],
};
