var React = require('react');


var ItunesList = function(props){
  var makeAudioTag = function(source){
    return (
      <audio controls id="audio">
        <source src={source} type="audio/x-m4a" />
      </audio>
    )
  }

  var trackList = props.tracks.map(function(track, index){
    return (
      //<li>
        <div id="track-box">
          <h3>Artist: {track['im:artist'].label}</h3>
          <h5>Song Name: {track['im:name'].label}</h5>
          <img src={track['im:image'][2].label} />
          <br></br>
          {makeAudioTag(track.link[1].attributes.href)}
        </div>

      //</li>
    )
  })

  var audioElements = document.querySelectorAll("#audio");
  audioElements.forEach(function(audio){
    audio.load();
  })
  return (
    
   <ol>{trackList}</ol>
    
  )

}

module.exports = ChartList;