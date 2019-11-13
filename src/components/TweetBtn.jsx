import React from 'react';

function TweetBtn(){
  return (
    <div>
      <style global jsx>{`
        #tweetbutton{
          border-radius:20px;
        }
      `}</style>
      <button type="button" className="btn btn-info" id="tweetbutton" name="button">Tweet</button>
    </div>
  );
}

export default TweetBtn;
