import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


describe('<App />', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
  });

  it('should contain header', () => {
      const app = mount(<App />);
      expect(app.contains("Flashcards")).toEqual(true);
  });

});
