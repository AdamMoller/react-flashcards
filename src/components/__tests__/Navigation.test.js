import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../Navigation';

describe('<Navigation />', () => {

  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Navigation />, div);
  });

  it('should render the header', () => {
    const shallowRender = shallow(<Navigation />);
    expect(shallowRender.contains("Flashcards")).toEqual(true);
  });

});
