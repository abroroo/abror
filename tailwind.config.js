/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                Patrick: ['Patrick Hand', 'cursive'],
                Caveat: ['Caveat', 'cursive']
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