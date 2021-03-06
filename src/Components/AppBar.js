import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TemporaryDrawer from './TemporaryDrawer.js';


import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
    color: "#ffffff",
  },
  title: {
    flexGrow: 1,
  },
  defaultTheme: {
    background: '#3358ff',
    color: "#ffffff"
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.defaultTheme}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} aria-label="menu">
            <TemporaryDrawer/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>  
          </Typography>
          <Button><EmojiObjectsOutlinedIcon color="action"/></Button>
          <Button color="inherit">Login</Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}
