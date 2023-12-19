document.addEventListener('DOMContentLoaded', function() {
    var audioPlayer = document.getElementById('audioPlayer');
    var playButton = document.getElementById('play');
    var pauseButton = document.getElementById('pause');
    var forwardButton = document.getElementById('forward');
    var backwardButton = document.getElementById('backward');
    var trackList = document.getElementById('trackList');
    var tracks = trackList.getElementsByTagName('li');
    var currentTrackIndex = 0;
    var currentTrack = '';

    // Event-Listener für die Playlist
    document.getElementById('trackList').addEventListener('click', function(e) {
        if (e.target && e.target.nodeName === "LI") {
            currentTrack = e.target.getAttribute('data-track');
            audioPlayer.src = `assets/tracks/${currentTrack}`;
            document.getElementById('trackTitle').innerText = e.target.innerText;
        }
    });

    // Event-Listener für doppelten Klick auf die Playlist
    document.getElementById('trackList').addEventListener('dblclick', function(e) {
        if (e.target && e.target.nodeName === "LI") {
            audioPlayer.play();
        }
    });

       // Funktion, um den aktuellen Track zu wechseln
       function changeTrack(index) {
        if (index >= 0 && index < tracks.length) {
            currentTrackIndex = index;
            audioPlayer.src = `assets/tracks/${tracks[currentTrackIndex].getAttribute('data-track')}`;
            audioPlayer.play();
            document.getElementById('trackTitle').innerText = tracks[currentTrackIndex].innerText;
        }
    }

    // Event-Listener für den Play-Button
    playButton.addEventListener('click', function() {
        if (currentTrack) {
            audioPlayer.play();
        }
    });

     // Pause-Button
     pauseButton.addEventListener('click', function() {
        audioPlayer.pause();
    });

    // Forward-Button
    forwardButton.addEventListener('click', function() {
        changeTrack(currentTrackIndex + 1);
    });

    // Backward-Button
    backwardButton.addEventListener('click', function() {
        changeTrack(currentTrackIndex - 1);
    });

    // Auswahl eines Tracks aus der Playlist
    trackList.addEventListener('click', function(e) {
        if (e.target && e.target.nodeName === "LI") {
            for (var i = 0; i < tracks.length; i++) {
                if (tracks[i] === e.target) {
                    changeTrack(i);
                    break;
                }
            }
        }
    });

   
});
