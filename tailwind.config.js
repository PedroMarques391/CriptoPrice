/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{html, js}'];
export const darkMode = "class";
export const theme = {
  extend: {
    fontFamily: {
      'helvetica': 'Helvetica',
    }
  },
};
export const plugins = [require('@tailwindcss/forms')];

