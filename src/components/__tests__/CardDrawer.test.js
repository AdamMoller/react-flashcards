import React from 'react';
import ReactDOM from 'react-dom';
import CardDrawer from '../CardDrawer';

describe('<CardDrawer />', () => {
  let component, open, toggle, setDeck;
  beforeEach(() => {
    open = true;
    toggle = jest.fn();
    setDeck = jest.fn();
    component = (
      <CardDrawer
        open={open}
        toggle={toggle}
        setDeck={setDeck}
      />
    );
  });

  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(component, div);
  });

  it('should not error with click events', () => {
      const fullRender = mount(component);
      fullRender.find("ListItem").at(0).simulate('click')
      fullRender.find("ListItem").at(1).simulate('click')
      fullRender.find("ListItem").at(2).simulate('click')
      fullRender.find("ListItem").at(3).simulate('click')
      fullRender.find("ListItem").at(4).simulate('click')
      fullRender.find("ListItem").at(5).simulate('click')
      fullRender.find("ListItem").at(6).simulate('click')
      fullRender.find("ListItem").at(7).simulate('click')
  });
});
