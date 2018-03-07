import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  flashcard:{
    padding: theme.spacing.unit * 4,
  }
});


class Flashcard extends Component {
  render() {
    const { classes, word, clickCard } = this.props;
    return (
      <React.Fragment>
        <Paper elevation={4} className={classes.flashcard} onClick={clickCard}>
          <Typography variant="display3" align="center">{word}</Typography>
        </Paper>
      </React.Fragment>
    );
  }
}

Flashcard.propTypes = {
  classes: PropTypes.object.isRequired,
  word: PropTypes.string.isRequired,
  clickCard: PropTypes.func.isRequired,
};

export default withStyles(styles)(Flashcard);
