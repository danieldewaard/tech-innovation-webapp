import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { IoIosBusiness } from "react-icons/io";

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

function OfficeButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" color="primary" className={classes.button}>
        {props.label}
        <IoIosBusiness size={20} className={classes.rightIcon} />
      </Button>
    </div>
  );
}

OfficeButton.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OfficeButton);
