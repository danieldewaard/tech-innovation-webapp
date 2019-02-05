import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { IoIosHome } from "react-icons/io";

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

function HomeButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" color="secondary" className={classes.button}>
        {props.label}
        <IoIosHome size={20} className={classes.rightIcon} />
      </Button>
    </div>
  );
}

HomeButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HomeButton);
