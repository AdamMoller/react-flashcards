import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../Navigation';

describe('<Navigation />', () => {
  let component, openMenu;
  beforeEach(() => {
    openMenu = jest.fn();
    component = (
      <Navigation
        clickMenuButton={openMenu}
      />
    );
  });

  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(component, div);
  });

  it('should render the header', () => {
    const shallowRender = mount(component);
    expect(shallowRender.contains("Flashcards")).toEqual(true);
  });

});
