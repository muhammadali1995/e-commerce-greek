module.exports = {
  content: [
    "./*.html",
    "./**/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        "blue": "#3A66B8",
        "orange": "#EF7F1A",
        "black-pearl": "#161819",
        "green": {
          400: "#14C687",
          700: "#009289"
        },
        "red": {
          300: "#E74C3C",
          500: "#DD1B1E"
        },
        "gray": {
          50: "#F1F1F1", //white-light
          100: "#e6e6e6", // line-color
          200: "#bdbdbd", // gray-200, hr-color
          400: "#999999", // dark
          500: "#f9f9f9", // gray
          600: "#818181", // grey light
          700: "#7c7c7c", // black light
          800: "#5a5a5a", // gray black
          900: "#212121" // black
        },
      },
      borderWidth: {
        3: '3px'
      },
      width: {
        45: '180px',
        125: '500px',
        297: '1190px',
      },
      height: {
        122: '122px',
        71: '71px',
        180: '180px',
        220: '220px',
        200: '200px',
        190: '190px',
        125: '125px',
      },
      maxWidth: {
        100: '400px',
        134: '134px',
        850: '850px',
        1080: '1080px',
        617: '617px',
        1200: '1200px'
      },
      spacing: {
        4.5: '18px',
        7.5: '30px',
        15: '60px',
        18: '72px',
      },

      lineHeight: {
        5.5: '22px',
      },

      backgroundImage: {
        'footer': "url('./../../assets/bg-footer.jpg')",
      },
      fontSize: {
        13: ['0.8125rem'],
      },
      boxShadow: {
        'menu-shadow': '0px -10px 20px #0000000D',
        'fixed-shadow': 'box-shadow: 0px -10px 20px #0000000D',
        'menu': ' 5px 0px 20px #15151533'
      },
      maxHeight: {
        104: '416px',
      }
    },
  },
  plugins: [],
}