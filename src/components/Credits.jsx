import React from 'react';

import messages from '../messages';

function Credits(props) {
  return (
    <div>
      <div className="credits">
        <span id="labelFooter" className="translate">{ messages.labelFooter[props.currentLang] } </span>
        <a href="https://github.com/thomaspark/flexboxfroggy/">GitHub</a> • 
        <span id="language">
          <span id="languageActive" className="toggle translate" onClick={ props.toggleLang }>{ messages.languageActive[props.currentLang] }</span>
          <span className={ "tooltip" + (props.langShow ? "" : " hide") }>
            { Object.entries(messages.languageActive).map(item => {
              return (
                <a 
                  key={ item[0] } 
                  href={ "#" + item[0] } 
                  data-lang={ item[0] }
                  onClick={ props.changeLang } >{ item[1] }</a> 
              );
            }) }
          </span>
        </span>
      </div>
      <div className="credits">
        <span id="gridGarden" className="translate">Want to learn CSS grid? Play</span> <a href="http://cssgridgarden.com">Grid Garden</a>.
      </div>
    </div>
  );
}

export default Credits;