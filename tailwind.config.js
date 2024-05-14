/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                light: {
                    primary: '#5a43c9', // Darker shade for primary to improve contrast
                    secondary: '#f6d860', // Kept as is for vibrant highlights
                    accent: '#37cdbe', // Kept as is for consistent accenting
                    neutral: '#3d4451', // Kept as is for dark text/elements
                    'base-100': '#ffffff', // White for light mode background
                    'base-200': '#f4f4f9', // Slightly darker than base-100 for subtle UI elements
                    info: '#3abff8', // Additional color for info messages
                    success: '#36d399', // Additional color for success messages
                    warning: '#fbbd23', // Additional color for warning messages
                    error: '#f87272', // Additional color for error messages
                },
            },
            {
                dark: {
                    primary: '#a991f7', // Original primary for familiar branding
                    secondary: '#f6d860', // Kept as is for vibrant highlights
                    accent: '#37cdbe', // Kept as is for consistent accenting
                    neutral: '#e4e4e7', // Light gray for text/elements to ensure readability
                    'base-100': '#1a1b20', // Very dark background for dark mode
                    'base-200': '#25262a', // Slightly lighter than base-100 for subtle UI elements
                    info: '#3abff8', // Additional color for info messages
                    success: '#36d399', // Additional color for success messages
                    warning: '#fbbd23', // Additional color for warning messages
                    error: '#f87272', // Additional color for error messages
                },
            },
        ],
    },
    darkMode: 'class',
    plugins: [require('daisyui')],
};
