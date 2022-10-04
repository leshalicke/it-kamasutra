import React from 'react';
import ReactDOM from 'react-dom';
import SamuraiAPP from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SamuraiAPP />, div);
  ReactDOM.unmountComponentAtNode(div);
});