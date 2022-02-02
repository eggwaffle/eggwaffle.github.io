module.exports = {
  content: [
    // Use *.tsx if using TypeScript
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './pages/**/*.{js,jsx,ts,tsx,vue}',
    './components/**/*.{js,jsx,ts,tsx,vue}'
  ],
  theme: {
    fontFamily: {
      'krona-one': ['"Krona One"', 'sans-serif'],
      'montserrat' : ['Montserrat', 'sans-serif'],
      'raleway' : ['Raleway', 'sans-serif'],
      'tutorial': ['-apple-system','BlinkMacSystemFont','"Segoe UI"','Roboto','Oxygen','Ubuntu','Cantarell',
        '"Fira Sans"','"Droid Sans"','"Helvetica Neue"','sans-serif']
    },
    extend: {
      colors: {
        '0070f3': '#0070f3',
        '2F80ED': '#2F80ED',
        '333333': '#333333',
        '4F4F4F': '#4F4F4F',
        'F7DF94': '#F7DF94',
        '828282': '#828282',
        'A9A9A9': '#A9A9A9',
        'BDBDBD': '#BDBDBD',
        'F2F2F2': '#F2F2F2',
        'EB5757': '#EB5757',
      },
    }
  },
  plugins: [],
}
