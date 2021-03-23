import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MUIDataTableSearch: {
      searchText: {
        display: 'flex',
        justifyContent: 'center',
      },
    },
    MUIDataTableHeadCell: {
      sortAction: {
        alignItems: 'center',
      },
    },
  },
  palette: {
    primary: {
      main: '#C1555F',
      dark: '#AE4C56', // hover
      contrastText: '#fff',
    },
  },
});

export default theme;
