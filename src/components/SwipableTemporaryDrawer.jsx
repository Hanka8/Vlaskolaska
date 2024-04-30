import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuButton from './Landing/MenuButton';
import { Link } from 'react-router-dom'

export default function SwipeableTemporaryDrawer({scrolledMenu, gallery, scrolled}) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      {[['O mně', "/omne"], ['Průvodce procesem', "/proces"], ['Služby a ceník', "/sluzby"], ['Galerie - foto', "/galerie"], ["Galerie - video", "/videa"], ["Kontakt", "/kontakt"]].map((text, index) => (
        <Link to={text[1]} style={{textDecoration: "none", color: "inherit"}}>
          <ListItem key={text[0]} disablePadding>
            <ListItemButton>
              <ListItemText primary={text[0]} />
            </ListItemButton>
          </ListItem>
        </Link> 
      ))}
      </List>
    </Box>
  );

  return (
    <div>
        <React.Fragment key={"right"}>
          {/* <Button onClick={toggleDrawer("right", true)}>{"right"}</Button> */}
          <MenuButton toggleDrawer={toggleDrawer} drawerOpen={state["right"]} scrolledMenu={scrolledMenu} gallery={gallery} scrolled={scrolled}/>
          <SwipeableDrawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            onOpen={toggleDrawer("right", true)}
            // Custom styles for SwipableDrawer
            sx={{
              '& .MuiPaper-root': {
                backgroundColor: "rgba(0, 0, 0, 0.6)",
              },
              '& .MuiListItemText-root': {
                color: "#e7d7d6",
              },
              '& .MuiButtonBase-root:hover': {
                backgroundColor: "rgba(0, 0, 0, 0.6)",
              },
            }}
          >
          {list("right")}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}