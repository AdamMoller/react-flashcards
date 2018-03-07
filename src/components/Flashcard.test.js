import React from 'react';
import ReactDOM from 'react-dom';
import Flashcard from './Flashcard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Flashcard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
