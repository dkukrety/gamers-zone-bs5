class Track {
    constructor(title, artist, duration) {
        this.title = title;
        this.artist = artist;
        this.duration = duration;
        this.isFavorite = false;
    }
    play() {
        console.log(`${this.title} is being played`)
    }
}

class Playlist {
    constructor(name) {
        this.name = name;
        this.tracks = [];
    }

    addTrack(track) {
        this.tracks.push(track);
    }

    play() {
        this.tracks.forEach(track => track.play());
    }

    makeFav(track) {
        track.isFavorite = true;
    }

    playFav() {
        this.tracks.forEach(track => {
            if (track.isFavorite) {
                track.play();
            }
        })
    }
    playParticularTrack(trackNo) {
        if (this.tracks[trackNo - 1]) {
            this.tracks[trackNo - 1].play()
        }
    }
}

const track1 = new Track('Song 1', 'Artist 1', '3:45');
const track2 = new Track('Song 2', 'Artist 2', '4:20');
const track3 = new Track('Song 3', 'Artist 3', '5:10');

const playlist = new Playlist('My Playlist');
playlist.addTrack(track1);
playlist.addTrack(track2);
playlist.makeFav(track2)
playlist.addTrack(track3);
playlist.playFav();
playlist.playParticularTrack(3)
