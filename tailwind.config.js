/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                patrick: ['Patrick Hand', 'cursive'],
                jost: ['Jost', 'sans-serif']
            },
            cursor: {
                hand: 'url(/images/icons/hand-cursor.png), pointer',
            },
        },
    },
    plugins: [
        require('tailwind-scrollbar'),
    ],
}