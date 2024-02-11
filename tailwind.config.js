export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        success: '#52c861',
        warning: '#f0bc20',
        danger: '#fb232c',
        error: '#fb232c',
        gray: '#8D8D8D',
        info: '#f5f5f5'
      }
    }
  },
  plugins: [],
  corePlugins: {
    // preflight: false
  }
}
