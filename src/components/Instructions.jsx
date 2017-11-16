import React from 'react';

function Instructions(props) {
  return (
    <div>
      <h1>Flexbox Froggy</h1>
      <p id="instructions" dangerouslySetInnerHTML={{__html: props.content}}></p>
      <p id="docs"></p>
    </div>
  );
}

export default Instructions;