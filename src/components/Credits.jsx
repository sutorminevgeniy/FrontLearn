import React from 'react';
import { connect } from 'react-redux';

import LanguageContainer from '../container/LanguageContainer';

import messages from '../data/messages';

function CreditsLang(props) {
  return (
    <div>
      <div className="credits">
        <span id="labelFooter" className="translate">{ messages.labelFooter[props.state.lang] } </span>
        <a href="https://github.com/thomaspark/flexboxfroggy/">GitHub</a> • 
        <LanguageContainer />
      </div>
      <div className="credits">
        <span id="gridGarden" className="translate">Want to learn CSS grid? Play</span> <a href="http://cssgridgarden.com">Grid Garden</a>.
      </div>
    </div>
  );
}

function mapStateToProps(state) {
    return { state };
}
const Credits = connect(mapStateToProps)(CreditsLang);

export default Credits;