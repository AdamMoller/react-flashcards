import React from 'react';
import ReactDOM from 'react-dom';
import Controls from './Controls';


describe('<Controls />', () => {
  let previousCard, nextCard, component

  beforeEach(() => {
    previousCard = jest.fn();
    nextCard = jest.fn();
    component = (
      <Controls
        clickNext={nextCard}
        clickBack={previousCard}
      />
    );
  });

  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(component, div);
  });

});
