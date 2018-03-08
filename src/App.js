import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import withRoot from './withRoot';
import Grid from 'material-ui/Grid';
import Navigation from './components/Navigation.js';
import CardDrawer from './components/CardDrawer.js';
import Flashcard from './components/Flashcard.js';
import Controls from './components/Controls.js';

const styles = theme => ({
  app: {
    marginTop:'10px',
  },
  flashcard: {
  },
});

const shuffleCards = arr => (
  arr.sort(() => Math.random() - 0.5)
);

const cardDecks = {
  A: ["Aa","Bb","Cc","Dd","Ee","Ff","Gg","Hh","Ii","Jj","Kk","Ll","Mm","Nn","Oo","Pp","Qq","Rr","Ss","Tt","Uu","Vv","Ww","Xx","Yy","Zz"],
  B: ["0","1","2","3","4","5","6","7","8","9"],
  C: ["a","and","away","big","blue","can","come","down","find","for","funny","go","help","here","I","in","is","it","jump","little","look","make","me","my","not","one","play","red","run","said","see","the","three","to","two","up","we","where","yellow","you"],
  D: ["all","am","are","at","ate","be","black","brown","but","came","did","do","eat","four","get","good","have","he","into","like","must","new","no","now","on","our","out","please","pretty","ran","ride","saw","say","she","so","soon","that","there","they","this","too","under","want","was","well","went","what","white","who","will","with","yes"],
  E: ["after","again","an","any","as","ask","by","could","every","fly","from","give","giving","had","has","her","him","his","how","just","know","let","live","may","of","old","once","open","over","put","round","some","stop","take","thank","them","then","think","walk","were","when"],
  F: ["always","around","because","been","before","best","both","buy","call","cold","does","don't","fast","first","five","found","gave","goes","green","its","made","many","off","or","pull","read","right","sing","sit","sleep","tell","their","these","those","upon","us","use","very","wash","which","why","wish","work","would","write","your"],
  G: ["about","better","bring","carry","clean","cut","done","draw","drink","eight","fall","far","full","got","grow","hold","hot","hurt","if","keep","kind","laugh","light","long","much","myself","never","nine","only","own","pick","seven","shall","show","six","small","start","ten","today","together","try","warm"],
  H: ["apple","baby","back","ball","bear","bed","bell","bird","birthday","boat","box","boy","bread","brother","cake","car","cat","chair","chicken","children","Christmas","coat","corn","cow","day","dog","doll","door","duck","egg","eye","farm","farmer","father","feet","fire","fish","floor","flower","game","garden","girl","good-bye","grass","ground","hand","head","hill","home","horse","house","kitty","leg","letter","man","men","milk","money","morning","mother","name","nest","night","paper","party","picture","pig","rabbit","rain","ring","robin","Santa Claus","school","seed","sheep","shoe","sister","snow","song","squirrel","stick","street","sun","table","thing","time","top","toy","tree","watch","water","way","wind","window","wood"],
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardIndex: 0,
      deck: shuffleCards(cardDecks["A"]),
      cardDrawer: false,
    }
    this.previousCard = this.previousCard.bind(this)
    this.nextCard = this.nextCard.bind(this)
    this.toggleCardDrawer = this.toggleCardDrawer.bind(this)
    this.setDeck = this.setDeck.bind(this)
  }

  nextCard = (e) => {
    let nextIndex = this.state.cardIndex + 1;
    if(nextIndex >= this.state.deck.length){
      nextIndex = 0;
    }
    this.setState({cardIndex: nextIndex});
  }

  previousCard = (e) => {
    let nextIndex = this.state.cardIndex - 1;
    if(nextIndex < 0){
      nextIndex = this.state.deck.length - 1;
    }
    this.setState({cardIndex: nextIndex});
  }

  toggleCardDrawer = (e) => {
    let drawerState = true;
    if (this.state.cardDrawer === true){
      drawerState = false;
    }
    this.setState({
      cardDrawer: drawerState,
    });
  };

  setDeck = (id) => {
    this.setState({
      cardIndex: 0,
      deck: shuffleCards(cardDecks[id])
    });
  }

  render() {
    const { classes } = this.props;
    const { deck, cardIndex, cardDrawer } = this.state;
    return (
      <React.Fragment>
      <Navigation clickMenuButton={this.toggleCardDrawer}/>
      <CardDrawer open={cardDrawer} toggle={this.toggleCardDrawer} setDeck={this.setDeck}/>
        <Grid container direction="column" align="center" spacing={40} className={classes.app}>
          <Grid item xs={11} sm={9} md={7} lg={5} className={classes.flashcard}>
            <Flashcard word={deck[cardIndex]} clickCard={this.nextCard}/>
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
