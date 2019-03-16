import React from 'react';

import LanguageContainer from '../container/LanguageContainer';

function Credits(props) {
  if(!props.main.lang) return null;

  return (
    <footer>
      <div className="credits">
        <span id="labelFooter" className="translate">{ props.main.messages.labelFooter[props.main.lang] } </span>
        <a href="https://github.com/thomaspark/flexboxfroggy/">GitHub</a> • 
        <LanguageContainer />
      </div>
      <div className="credits">
        <span id="gridGarden" className="translate">Want to learn CSS grid? Play</span> <a href="http://cssgridgarden.com">Grid Garden</a>.
      </div>
    </footer>
  );
}

export default Credits;