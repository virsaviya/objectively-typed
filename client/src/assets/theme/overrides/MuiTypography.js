import NunitoSansRegular from 'assets/fonts/Nunito_Sans/NunitoSans-Regular.ttf';

const nunitoSans = {
  fontFamily: 'NunitoSans',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('NunitoSans'),
    local('NunitoSans-Regular'),
    url(${NunitoSansRegular}) format('truetype')
  `,
};

export default {
  gutterBottom: {
    marginBottom: 8,
  },
  MuiCssBaseline: {
    '@global': {
      '@font-face': [nunitoSans],
    },
  },
};
