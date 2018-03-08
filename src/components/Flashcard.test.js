import React from 'react';
import ReactDOM from 'react-dom';
import Flashcard from './Flashcard';

describe('<Flashcard />', () => {
  let nextCard, content, component
  let shallowRender, fullRender

  beforeEach(() => {
    nextCard = jest.fn();
    content = "example";
    let component = (<Flashcard
      word={content}
      clickCard={nextCard}
    />);
    shallowRender = shallow(component);
    fullRender = mount(component);
  });

  it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(component, div);
  });

  it('should contain word', () => {
      expect(fullRender.contains("example")).toEqual(true);
  });

  it('should change word', () => {
      expect(fullRender.contains("example")).toEqual(true);
      fullRender.setProps({ word: 'new' });
      expect(fullRender.contains("new")).toEqual(true);
  });
});
