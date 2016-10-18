var React = require('react');


var HitList = function(props){
  var songs = props.songs.map(function(song, index){
    var artist = song['im:artist'].label;
    var songTitle = song['im:name'].label;
    var url = song.link[1].attributes.href
    return (
      <div>
        <h2>Artist: {artist} </h2>
        <h2>Song: {songTitle} </h2>
        <audio controls>
          <source src={url} type="audio/mp4" />
        </audio>
      </div>
    )

  });
  return (
    <div>
      {songs}
    </div>
  )
}

module.exports = HitList;