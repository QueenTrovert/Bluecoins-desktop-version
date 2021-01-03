import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DashboardIcon from '@material-ui/icons/Dashboard';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import DeleteIcon from '@material-ui/icons/Delete';
import SettingsIcon from '@material-ui/icons/Settings';
import SyncIcon from '@material-ui/icons/Sync';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import PeopleIcon from '@material-ui/icons/People';
import MessageIcon from '@material-ui/icons/Message';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div>
        <h2><b>Bluecoins</b></h2>
        <p><a href="www.bluecoinsapp.com">www.bluecoinsapp.com</a></p>
      </div>
      <List>
        {['Main Dashboard'].map((text) => (
          <ListItem button key={text}>
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        {['Calendar'].map((text) => (
          <ListItem button key={text}>
            <ListItemIcon><DateRangeIcon/></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        {['Categories & Budget'].map((text) => (
          <ListItem button key={text}>
            <ListItemIcon><ShoppingBasketIcon/></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        {['Account Setup'].map((text) => (
          <ListItem button key={text}>
            <ListItemIcon><AccountBalanceIcon/></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        {['Labels'].map((text) => (
          <ListItem button key={text}>
            <ListItemIcon><LocalOfferIcon/></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        {['Trash'].map((text) => (
          <ListItem button key={text}>
            <ListItemIcon><DeleteIcon/></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        {['Settings'].map((text) => (
          <ListItem button key={text}>
            <ListItemIcon><SettingsIcon/></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      
      <Divider />
      <List>
        {['QuickSync', 'Travel Mode'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <SyncIcon /> : <DriveEtaIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider/>
      <List>
        {['Tell A Friend', 'Send Feedback'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <PeopleIcon /> : <MessageIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider/>
      {['Support Development'].map((text) => (
          <ListItem button key={text}>
            <ListItemIcon><InsertEmoticonIcon/></ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
