import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import DescriptionIcon from 'material-ui-icons/Description';

const styles = {
  deckList: {
    width: 'auto',
  },
};

class CardDrawer extends Component {
  render() {
    const { classes, toggle, open, setDeck } = this.props;

    return (
      <Drawer anchor="left" open={open} onClick={toggle}>
        <div
          tabIndex={0}
          role="button"
          onClick={toggle}
          onKeyDown={toggle}
        >
        <div className={classes.fullList}>
        <List>
          <ListItem button onClick={() => setDeck("A")}>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="ABC"/>
          </ListItem>
          <ListItem button onClick={() => setDeck("B")}>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="123" />
          </ListItem>
          <ListItem button onClick={() => setDeck("C")}>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Pre-primer" />
          </ListItem>
          <ListItem button onClick={() => setDeck("D")}>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Primer" />
          </ListItem>
          <ListItem button onClick={() => setDeck("E")}>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="1st Grade" />
          </ListItem>
          <ListItem button onClick={() => setDeck("F")}>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="2nd Grade" />
          </ListItem>
          <ListItem button onClick={() => setDeck("G")}>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="3rd Grade" />
          </ListItem>
          <ListItem button onClick={() => setDeck("H")}>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText primary="Nouns" />
          </ListItem>
        </List>
        </div>
        </div>
      </Drawer>
    );
  }
}

CardDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  setDeck: PropTypes.func.isRequired,
};

export default withStyles(styles)(CardDrawer);
