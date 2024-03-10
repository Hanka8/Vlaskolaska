import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuButton from './Landing/MenuButton';


export default function SwipeableTemporaryDrawer() {
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
        {['O mně', 'Rezervace & průvodce procesem', 'Služby a ceník', 'Galerie', "Recenze", "Kontakt", "Doporučuji"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
        <React.Fragment key={"right"}>
          {/* <Button onClick={toggleDrawer("right", true)}>{"right"}</Button> */}
          <MenuButton toggleDrawer={toggleDrawer} drawerOpen={state["right"]}/>
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