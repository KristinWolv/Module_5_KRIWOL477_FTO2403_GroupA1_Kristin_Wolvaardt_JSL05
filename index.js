// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax": "R&B",
    "Rocket": "Rock",
    "Groot": "Pop"
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
   
    const containerElement = document.getElementById('playlists');
    containerElement.innerHTML = '';
    //Finding HTML element with id 'playlist' and clearing out any old content

    Object.entries(guardians).forEach(([guardian, genre]) => {
        const filteredSongs = songs.filter(song => song.genre === genre);

        const guardianElement = document.createElement('div');
        guardianElement.classList.add('playlist');

        const guardianTitle = document.createElement('h2');
        guardianTitle.classList.add('guardian');
        guardianTitle.textContent = `${guardian}'s Playlist`;
        guardianElement.appendChild(guardianTitle);

        const songListElement = document.createElement('ul');
        filteredSongs.forEach(song => {
            const songItemElement = document.createElement('li');
            songItemElement.textContent = `${song.title} by ${song.artist}`;
            songItemElement.classList.add('song-title'); 
            songListElement.appendChild(songItemElement);
        });

        guardianElement.appendChild(songListElement);
        containerElement.appendChild(guardianElement);
    });
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);


