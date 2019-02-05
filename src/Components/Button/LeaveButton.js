import { IoMdThermometer } from "react-icons/io";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 50
  }
});

function LeaveButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" color="secondary" className={classes.button}>
        {props.label}
        <IoMdThermometer size={20} className={classes.rightIcon} />
      </Button>
    </div>
  );
}

LeaveButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LeaveButton);
