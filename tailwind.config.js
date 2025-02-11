/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        "./node_modules/@deriv-com/blocks/lib/index.js",
        "./node_modules/@deriv-com/components/lib/index.js",
        "./node_modules/@deriv/quill-design/dist/index.js",
    ],
    theme: {
        extend: {
            animation: {
                'fade-in': 'fadeIn 0.3s ease',
                'fade-out': 'fadeOut 0.3s ease',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeOut: {
                    '0%': { opacity: '1' },
                    '100%': { opacity: '0' },
                }
            }
        },
        maxHeight: {
            "none": "none",
        },
    },
    plugins: [],
    presets: [require('@deriv/quill-design/quill-tailwind/tailwind.config')],
}