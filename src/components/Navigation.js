import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class Navigation extends Component {
  render() {
    const { classes, clickMenuButton } = this.props;
    return (
      <React.Fragment>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton onClick={clickMenuButton} className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>Flashcards</Typography>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
  clickMenuButton: PropTypes.func.isRequired,
};

export default withStyles(styles)(Navigation);
