/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': 'url(/src/assets/images/man-notebook.png)',
      },
      fontFamily: {
        'roboto-regular': ['Roboto-Regular', 'sans-serif'],
        'roboto-bold': ['Roboto-Bold', 'sans-serif'],
        'roboto-light': ['Roboto-Light', 'sans-serif'],
        'baijamjuree-regular': ['BaiJamjuree-Regular', 'sans-serif'],
        'baijamjuree-bold': ['BaiJamjuree-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
