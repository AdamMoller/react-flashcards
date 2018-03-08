import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

describe('<App />', () => {
  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
  });

  it('should contain header', () => {
      const app = mount(<App />);
      expect(app.contains("Flashcards")).toEqual(true);
  });

  it('should not error with click events', () => {
      const app = mount(<App />);
      app.find("button").at(0).simulate('click')
      app.find("button").at(1).simulate('click')
      app.find("button").at(2).simulate('click')
      app.find("ListItem").at(0).simulate('click')
      app.find("ListItem").at(1).simulate('click')
      app.find("ListItem").at(2).simulate('click')
      app.find("ListItem").at(3).simulate('click')
      app.find("ListItem").at(4).simulate('click')
      app.find("ListItem").at(5).simulate('click')
      app.find("ListItem").at(6).simulate('click')
      app.find("ListItem").at(7).simulate('click')
  });
});
