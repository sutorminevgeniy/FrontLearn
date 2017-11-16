import React from 'react';

function Share() {
  return (
    <div id="share">
      <p className="img-next">
        <a href="http://cssgridgarden.com"><img src="../images/next-gridgarden.png"/></a>
        <a href="http://treehouse.7eer.net/c/371033/228915/3944?subId1=flexboxfroggy"><img src="../images/next-treehouse.png"/></a>
      </p>
      <p className="social">
        <span id="tweet">
          <a href="https://twitter.com/share" className="twitter-share-button" data-url="http://flexboxfroggy.com" data-via="playcodepip">Tweet</a>
          <a href="https://twitter.com/playcodepip" className="twitter-follow-button" data-show-count="false">Follow @playcodepip</a>
        </span>
        <span className="fb-like" data-href="http://flexboxfroggy.com" data-layout="button_count" data-action="like" data-show-faces="true" data-share="true"></span>
      </p>
    </div>
  );
}

export default Share;