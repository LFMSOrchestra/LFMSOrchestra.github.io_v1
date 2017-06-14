function openSong(song){
  cs_text = document.getElementById('current_song')
  player = document.getElementById('mp3_player')
  
  songs = {
    // Level 3
    'song1' : 'mp3/String6/01Song1.mp3',
    'song2' : 'mp3/String6/02Song2.mp3',
    'song3' : 'mp3/String6/03Song3.mp3',
    'lesson4' : 'mp3/String6/04lesson4II.mp3',
    'lesson8' : 'mp3/String6/05lesson8II.mp3',
    'holla' : 'mp3/String6/06HollaHi.mp3',
    'matilda' : 'mp3/String6/07WaltzingMatilda.mp3',
    'lesson23' : 'mp3/String6/08Lesson23II.mp3',
    'alouette' : 'mp3/String6/09Alouette.mp3',
    'beauty' : 'mp3/String6/10ForTheBeauty.mp3',
    'college' : 'mp3/String6/11CollegeHymn.mp3',
    'chester' : 'mp3/String6/12Chester.mp3',
    'muffin' : 'mp3/String6/13MuffinMan.mp3',
    'german' : 'mp3/String6/14GermanChorale.mp3',
    'gifts' : 'mp3/String6/15SimpleGifts.mp3',
    'minstrel' : 'mp3/String6/17MinstrelBoy.mp3',
    'railroad' : 'mp3/String6/18Railroad.mp3',
    'piper' : 'mp3/String6/20GalwayPiper.mp3',
    'corn' : 'mp3/String6/21DancingCorn.mp3',
    'rain' : 'mp3/String6/22RainStopped.mp3',
    'glendy' : 'mp3/String6/23GlendyBurke.mp3',
    'etude1' : 'mp3/String6/25Etude1.mp3',
    'sourwood' : 'mp3/String6/26Sourwood.mp3',
    'plowman' : 'mp3/String6/27Plowman.mp3',
    'etude3' : 'mp3/String6/28Etude3.mp3',
    'firstpos' : 'mp3/String6/29ExerciseInFirstPosit.mp3',
    'allaturca' : 'mp3/String6/20AllaTurca.mp3',
    // Level 4
    'scipio' : 'mp3/String7/01Scipio.mp3',
    'germandance' : 'mp3/String7/02GermanDance.mp3',
    'andante' : 'mp3/String7/03AndanteSurprise.mp3',
    'minuethandel' : 'mp3/String7/04MinuetHandel.mp3',
    'symph1' : 'mp3/String7/05Symphony1.mp3',
    'rondeau' : 'mp3/String7/06Rondeau.mp3',
    'march' : 'mp3/String7/07HandelMarch.mp3',
    'trio' : 'mp3/String7/08TrioMinuet.mp3',
    'voluntary' : 'mp3/String7/09Voluntary.mp3',
    'twoairs' : 'mp3/String7/10TwoAirs.mp3',
    'minuetbach' : 'mp3/String7/11BachMinuet.mp3',
    'burlesque' : 'mp3/String7/13Burlesque.mp3',
    'gavottecorelli' : 'mp3/String7/14GavotteCorelli.mp3',
    'bouree' : 'mp3/String7/15Bouree.mp3',
    'gavottedandrieu' : 'mp3/String7/16GavotteDandrieu.mp3',
    'rondocapriccio' : 'mp3/String7/17RondoCapriccio.mp3',
    'gavottegossec' : 'mp3/String7/18GavotteGossec.mp3',
    'hunter' : 'mp3/String7/19HuntersChorus.mp3',
    'wohlfahrt1' : 'mp3/String7/20EtudeNo1.mp3',
    'studentino' : 'mp3/String7/21HuberConcertino.mp3',
    // Level 5
    'romance' : 'mp3/String8/01Romance.mp3',
    'gavottehandel' : 'mp3/String8/03GavotteHandel.mp3',
    'allegromod' : 'mp3/String8/02AllegroModerato.mp3',
    'sonata7' : 'mp3/String8/06Sonata7.mp3',
    'wohlfahrt33vio' : 'mp3/String8/G8EtudeNo33.mp3',
    'wohlfahrt33cell' : 'mp3/String8/G8EtudeNo33CelloViola.mp3',
    'seitzvio' : 'mp3/String8/G8SeitzNo5Violin.mp3',
    'seitzvio90' : 'mp3/String8/G8SeitzNo5Violin90.mp3',
    'seitzcell' : 'mp3/String8/G8SeitzNo5CelloViola.mp3',
    'seitzcell90' : 'mp3/String8/G8SeitzNo5CelloViola90.mp3',
  }

  song_names = {
    // Level 3
    'song1' : 'Song Without Words #1',
    'song2' : 'Song Without Words #2',
    'song3' : 'Song Without Words #3',
    'lesson4' : 'Lesson 4, II',
    'lesson8' : 'Lesson 8, II',
    'holla' : 'Holla Hi Holla Ho',
    'matilda' : 'Waltzing Matilda',
    'lesson23' : 'Lesson 23, II',
    'alouette' : 'Alouette',
    'beauty' : 'For the Beauty of the Earth',
    'college' : 'College Hymn',
    'chester' : 'Chester',
    'muffin' : 'Muffin Man',
    'german' : 'German Chorale',
    'gifts' : 'Simple Gifts',
    'minstrel' : 'Minstrel Boy',
    'railroad' : 'I\'ve Been Working on the Railroad',
    'piper' : 'Galway Piper',
    'corn' : 'Dancing Through the Corn',
    'rain' : 'The Rain has Stopped',
    'glendy' : 'Glendy Burke',
    'etude1' : 'Etude 1',
    'sourwood' : 'Sourwood Mountain',
    'plowman' : 'Happy Plowman',
    'etude3' : 'Etude 3',
    'firstpos' : 'Exercise in 1<sup>st</sup> Position',
    'allaturca' : 'Alla Turca',
    // Level 4
    'scipio' : 'March from Scipio',
    'germandance' : 'German Dance',
    'andante' : 'Andante from Surprise Symphony',
    'minuethandel' : 'Minuet <small>by Handel</small>',
    'symph1' : 'Symphony № 1',
    'rondeau' : 'Rondeau',
    'march' : 'March <small>by Handel</small>',
    'trio' : 'Trio and Minuet',
    'voluntary' : 'Voluntary',
    'twoairs' : 'Two Airs',
    'minuetbach' : 'Minuet <small>by Bach</small>',
    'burlesque' : 'Burlesque',
    'gavottecorelli' : 'Gavotte <small>by Corelli</small>',
    'bouree' : 'Bouree',
    'gavottedandrieu' : 'Gavotte <small>by Dandrieu</small>',
    'rondocapriccio' : 'Rondo a Capriccio',
    'gavottegossec' : 'Gavotte <small>by Gossec</small>',
    'hunter' : 'Hunter\'s Chorus',
    'wohlfahrt1' : 'Etude № 1 <small>by Wohlfahrt</small>',
    'studentino' : 'Student Concertino № 4',
    // Level 5
    'romance' : 'Romance',
    'gavottehandel' : 'Gavotte <small>by Handel</small>',
    'allegromod' : 'Allegro Moderato',
    'sonata7' : 'Sonata № 7',
    'wohlfahrt33vio' : 'Etude № 33 (Violin)',
    'wohlfahrt33cell' : 'Etude № 33 (Viola/Cello/Bass)',
    'seitzvio' : 'Concerto № 5 by Seitz (Violin)',
    'seitzvio90' : 'Concerto № 5 by Seitz (Violin) <span class="glyphicon glyphicon-circle-arrow-down"></span> 90 BPM',
    'seitzcell' : 'Concerto № 5 by Seitz (Viola/Cello/Bass)',
    'seitzcell90' : 'Concerto № 5 by Seitz (Viola/Cello/Bass) <span class="glyphicon glyphicon-circle-arrow-down"></span> 90 BPM',
  }

  cs_text.innerHTML = song_names[song]
  player.setAttribute('src', songs[song])
}

function checkApp(){
  userAgent = window.navigator.userAgent;
  if (window.navigator.standalone || window.matchMedia('(display-mode: standalone)').matches) {
    document.getElementById('header').innerHTML = "SongPlayer 2.0 <small>For Mobile</small>"
    document.getElementById('navigation').innerHTML = '<div class="col-xs-12"><button onclick="window.location.reload()" class="btn btn-success"><span class="glyphicon glyphicon-refresh"></span> Reload</button></div>'
    return 0;
  } else if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i)) {
    document.getElementById('notice').innerHTML = "<div class='alert alert-info' role='alert'><strong>Install the app for easy access!</strong><p>All you have to do is tap Share <span class='glyphicon glyphicon-collapse-up'></span> and choose this icon:</p><img src='img/ios_safari_home.jpg' width='100' /></div>"
    return 0;
  } else if (userAgent.match(/Android/i)) {
    document.getElementById('notice').innerHTML = "<div class='alert alert-info' role='alert'><strong>Install the app for easy access!</strong><p>All you have to do is tap the <span class='glyphicon glyphicon-option-vertical'></span> and choose <kbd>Add to Home Screen</kbd> (in Chrome).</p><img src='img/android_chrome_home.jpg' width='100' /></div>"
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