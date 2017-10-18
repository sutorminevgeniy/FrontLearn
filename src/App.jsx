import React from 'react';
import ReactDom from 'react-dom';

import './style.scss'

function App() {
  return (
    <div>
      <h1>React</h1>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('root'));