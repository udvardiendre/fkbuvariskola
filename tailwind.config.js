/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'course-1': 'url("../src/assets/courses/c1.png")',
        'course-2': 'url("../src/assets/courses/c2.png")',
        'course-3': 'url("../src/assets/courses/c3.png")',
        'course-4': 'url("../src/assets/courses/c4.png")',
        'course-5': 'url("../src/assets/courses/c5.png")',
        'course-6': 'url("../src/assets/courses/c6.png")',
        'course-7': 'url("../src/assets/courses/c7.png")',
        'course-8': 'url("../src/assets/courses/c8.png")',
        'course-9': 'url("../src/assets/courses/c9.png")',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'primary-blue': '#0F3D66',
        'salmon': '#EF7F6A'
      }  
    },
  },
  plugins: [],
}