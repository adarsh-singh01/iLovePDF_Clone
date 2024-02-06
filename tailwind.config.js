/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens:{
        'vvsm':'250px',
        'vsm':'335px',
        'xxsm':'365px',
        'xsm':'440px',
        
        'xmd':'768px',
        'md':'960px',
        'lmd':"991px",
        'xlmd':'1085px',
      }
    },
  },
  plugins: [],
}

