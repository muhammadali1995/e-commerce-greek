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
        800: '800px',
        170: '170px',
        407: '407px',
        250: '250px',
        254: '254px',
        240: '240px',
        182: '182px',
        695: '695px',
        56: '56%',
        67: '67%',
        78: '78%',
        500: '500px',
        1190: '1190px',
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
        134: '134px',
        850: '850px',
        1080: '1080px',
        617: '617px',
        1200: '1200px'
      },
      spacing: {
        18: '72px',
        13: '14px',
        19: '18px',
        21: '20px',
        30: '30px',
        38: '38px',
        21: '21px',
        22: '22px',
        61: '61px',
        3.5: '14px',
        54: '54px',
        68: '68px',
        70: '70px',
        75: '75px',
        29: '29px',
        90: '90px',
        116: '116px',
        106: '106px',
        120: '120px',
        128: '128px',
        140: '140px',
      },

      lineHeight: {
        21: '21px',
        22: '22px',
      },

      backgroundImage: {
        'footer': "url('./assets/bg-footer.jpg')",
        'slide1': "url('./assets/slider1.png')",
        'discount1': "url('./assets/discount1.png')",
        'discount2': "url('./assets/discount2.png')",
        'discount3': "url('./assets/discount3.png')",
        'discount4': "url('./assets/discount4.png')",
        'discount5': "url('./assets/discount5.png')",
      },
      fontSize: {
        13: ['0.8125rem',],
      },
      boxShadow: {
        'menu-shadow': '0px -10px 20px #0000000D',
        'fixed-shadow': 'box-shadow: 0px -10px 20px #0000000D',
        'menu': ' 5px 0px 20px #15151533'
      },

      minHeight: {
        761: '761px',
        345: '345px'
      },
      maxHeight: {
        417: '417px',
        180: '180px'
      }
    },
  },
  plugins: [],
}