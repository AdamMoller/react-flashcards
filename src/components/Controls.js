import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({

});

class Controls extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Button color="secondary" variant="raised" className={classes.button}>Back</Button>
        <Button color="secondary" variant="raised" className={classes.button}>Next</Button>
      </React.Fragment>
    );
  }
}

Controls.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Controls);
