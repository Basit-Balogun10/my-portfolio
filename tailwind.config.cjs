/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./public/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                mainColor: "#0f172a",
                mainColor: "#3dbdf8",
                mainColor: "#94a3b8",
                mainColor: "#f472b6",

                mainColor: "#0f0a2f",
                mainColorLight: "#130d3c",
                mainColorLighter: "#241f44",

                secondaryColor: "#63fb9a",
                secondaryColor2: "#8b22ec",
                sec2: "#5336BF",
            },
        },
    },
    plugins: [],
};
