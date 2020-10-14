import 'typeface-poppins';
import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.6,
  googleFonts: [
    {
      name: 'Poppins',
      styles: ['100', '800', '900'],
    },
  ],
  headerFontFamily: ['Poppins', 'serif'],
  bodyFontFamily: ['Poppins', 'serif'],
});

typography.injectStyles();

export default typography;
