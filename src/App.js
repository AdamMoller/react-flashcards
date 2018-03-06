import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from './withRoot';
import Grid from 'material-ui/Grid';
import Navigation from './components/Navigation.js';
import Flashcard from './components/Flashcard.js';
import Controls from './components/Controls.js';

const styles = theme => ({
  app: {
  },
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid container direction="column" align="center" spacing={40} className={classes.app}>
        </Grid>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));
