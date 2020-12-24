import logo from './logo.svg';
import './App.css';
import AppBar from './Components/AppBar.js';
import MainTab from './Components/MainTab.js'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  defaultTheme: {
    background: '#3358ff',
  },
}));

function App() {  
  const classes = useStyles();
  return (
    <div className={classes.defaultTheme}>
      <AppBar className={classes.defaultTheme} />
      <MainTab />
    </div>
  );
}

export default App;
