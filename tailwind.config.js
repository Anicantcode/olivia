/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                cafe: {
                    beige: '#F5F5DC',
                    cream: '#FFFDD0',
                    wood: '#6F4E37',
                    woodDark: '#3E2723',
                    olive: '#808000',
                    sage: '#9DC183',
                    gold: '#FFD700',
                    goldSoft: '#F3E5AB'
                }
            },
            fontFamily: {
                serif: ['"Playfair Display"', '"Cormorant"', 'serif'],
                sans: ['"Inter"', '"Poppins"', 'sans-serif'],
            },
            backgroundImage: {
                'cafe-gradient': 'linear-gradient(to bottom right, rgba(245, 245, 220, 0.9), rgba(111, 78, 55, 0.8))',
            }
        },
    },
    plugins: [],
}
