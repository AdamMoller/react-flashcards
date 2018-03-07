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
    marginTop:'10px',
  },
  flashcard: {
  },
});

class App extends Component {
  constructor(props) {
    super(props)
    let words = ["school","always","around","because","been","before","best","both","buy","call","cold","does","don’t","fast","first","five","found","gave","goes","green","its","made","many","off","or","pull","read","right","sing","sit","sleep","tell","their","these","those","upon","us","use","very","wash","which","why","wish","work","would","write","your"]
    this.state = {
      cardIndex: 0,
      words: words,
    }
    this.previousCard = this.previousCard.bind(this)
    this.nextCard = this.nextCard.bind(this)
  }
  nextCard(e) {
    let nextIndex = this.state.cardIndex + 1
    if(nextIndex >= this.state.words.length){
      nextIndex = 0;
    }
    this.setState({cardIndex: nextIndex});
  }
  previousCard(e) {
    let nextIndex = this.state.cardIndex - 1
    if(nextIndex < 0){
      nextIndex = this.state.words.length - 1
    }
    this.setState({cardIndex: nextIndex});
  }
  render() {
    const { classes } = this.props;
    const { words,cardIndex } = this.state;
    return (
      <React.Fragment>
      <Navigation/>
        <Grid container direction="column" align="center" spacing={40} className={classes.app}>
          <Grid item xs={11} sm={9} md={7} lg={5} className={classes.flashcard}>
            <Flashcard word={words[cardIndex]} clickCard={this.nextCard}/>
          </Grid>
          <Grid item xs={11} sm={9} md={7} lg={5} align="center" className={classes.controls}>
            <Controls clickBack={this.previousCard} clickNext={this.nextCard}/>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(App));
