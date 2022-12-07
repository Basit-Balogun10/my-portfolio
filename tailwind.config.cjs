/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // mainColor: "#0f172a",
                // mainColor: "#3dbdf8",
                // mainColor: "#94a3b8",
                // mainColor: "#f472b6",

                mainColor: "#0f0a2f",
                lightMainColor: "#130d3c",
                lighterMainColor: "#241f44",

                secondaryColor: "#63fb9a",
                dimmedSecondaryColor: "#05d652e8",
                secondaryColor2: "#8b22ec",
                sec2: "#5336BF",
            },
            fontFamily: {
                syne: ['Syne', 'sans-serif'],
                comfortaa: ['Comfortaa', 'sans-serif'],
                pacifico: ['Pacifico', 'sans-serif']
            },
        },
    },
    plugins: [],
};
