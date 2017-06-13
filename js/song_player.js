function openSong(song){
  cs_text = document.getElementById('current_song')
  player = document.getElementById('mp3_player')
  
  songs = {
    // Level 3
    'song1' : 'mp3/String6/01Song1.mp3',
    'song2' : 'mp3/String6/02Song2.mp3',
    // Level 4
    // Level 5
    'romanc' : 'mp3/String8/01Romance.mp3',
    'seitz90violin' : 'mp3/String8/G8SeitzNo5Violin90.mp3',
  }

  song_names = {
    // Level 3
    'song1' : 'Song #1',
    'song2' : 'Song #2',
    // Level 4
    // Level 5
    'romance' : 'Romance',
    'seitz90violin' : 'Concertino № 5 Violin <span class="glyphicon glyphicon-circle-arrow-down"></span> 90 BPM',
  }

  cs_text.innerHTML = song_names[song]
  player.setAttribute('src', songs[song])
}

function checkApp(){
  userAgent = window.navigator.userAgent;
  if (window.navigator.standalone) {
    document.getElementById('header').innerHTML = "SongPlayer 2.0 <small>For Mobile</small>"
    document.getElementById('navigation').innerHTML = '<div class="col-xs-12"><button onclick="window.location.reload()" class="btn btn-success"><span class="glyphicon glyphicon-refresh"></span> Reload</button></div>'
    return 0;
  } else if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
    document.getElementById('notice').innerHTML = "<div class='alert alert-info' role='alert'><strong>Install the app for easy access!</strong><p>All you have to do is tap Share (looks like <span class='glyphicon glyphicon-collapse-up'></span>) and choose this icon:</p><img src='img/home_screen.jpg' width='100' /></div>"
    return 0;
  }
}

function audioError(){
  player = document.getElementById('mp3_player')

  if (player.src !== window.location.origin + window.location.pathname){
    console.error("Something happened. Source of audio: " + player.src)
    document.getElementById('player_div').innerHTML = "<div class='alert alert-danger' role='alert'><span class='glyphicon glyphicon-thumbs-down'></span> <strong>Oops!</strong> An error occured. <a onclick='window.location.reload()'><span class='glyphicon glyphicon-refresh'></span> Reload</a></div>"
  }
}