import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
  button:{
    margin:'20px',
  }
});

class Controls extends Component {
  render() {
    const { classes, clickNext, clickBack } = this.props;
    return (
      <React.Fragment>
        <Button color="secondary" variant="raised" onClick={clickBack} className={classes.button}>Back</Button>
        <Button color="secondary" variant="raised" onClick={clickNext} className={classes.button}>Next</Button>
      </React.Fragment>
    );
  }
}

Controls.propTypes = {
  classes: PropTypes.object.isRequired,
  clickBack: PropTypes.func.isRequired,
  clickNext: PropTypes.func.isRequired,
};

export default withStyles(styles)(Controls);
