import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import "./Calendar.css";
import Box from "@material-ui/core/Box";
import {ListItem} from "@material-ui/core";
import { useJupiterListItemStyles } from "@mui-treasury/styles/listItem/jupiter";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <div id="plus-button" className={classes.root}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
}

const JupiterListItemStyle = (props) => {
  const range = props.selectedRange;
  const classes = useJupiterListItemStyles();
  console.log(props);
  const timeFormat = (value) => {
    if (value == 0 || value == 24) {
      return 12 + " AM";
    }
    if (value == 12) {
      return 12 + " PM";
    }

    return value > 12 ? value - 12 + " PM" : value + " AM";
  };

  const array = [];
  for (let i = range[0]; i <= range[range.length - 1]; i++) {
    array.push(
      <ListItem classes={classes} component="div" key={i}>
        {timeFormat(i)}
      </ListItem>
    );
  }
  console.log(array);
  return array;
};

export default class Calendar extends React.Component {
  render() {
    const range = this.props.selectedRange;
    console.log(range);
    return (
      <div className="container">
        <FloatingActionButtons />
        <div className="row">
          <div className="col-4">
            <JupiterListItemStyle selectedRange={range} />
          </div>
        </div>
      </div>
    );
  }
}
