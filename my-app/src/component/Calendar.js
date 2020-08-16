import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import "./Calendar.css";
import Box from "@material-ui/core/Box";
import ListItem from "@material-ui/core/ListItem";
import { useJupiterListItemStyles } from "@mui-treasury/styles/listItem/jupiter";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

 export function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <div id="plus-button" className={classes.root}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
};



export const JupiterListItemStyle = (props) => {
  const range = props.selectedRange;
  const classes = useJupiterListItemStyles();
  for (let i = range[0]; i < range.length; i++) {
    return (
      <ListItem classes={classes} component="div">
        {i}
      </ListItem>
    )
  }


/*
return (
    <Box minWidth={240}>
      <ListItem classes={classes} component="div">
        Default Item
      </ListItem>
      <ListItem classes={classes} button>
        Button Item
      </ListItem>
      <ListItem classes={classes} button selected>
        Selected Item
      </ListItem>
    </Box>
  );
*/

};
