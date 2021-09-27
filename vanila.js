const audio = document.querySelector("audio");
const musicName = document.querySelector(".title");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const playPush = document.querySelector(".playPush");
console.log(audio, musicName, prev, next, playPush);


const songList = [{
        path: "./music/music_1.mp3",
        Name: "Song 1"
    },
    {
        path: "/music/music_2.mp3",
        Name: "Song 2"
    },
    {
        path: "/music/music_3.mp3",
        Name: "Song 3"
    },
    {
        path: "/music/music_4.mp3",
        Name: "Song 4"
    },
    {
        path: "/music/music_5.mp3",
        Name: "Song 5"
    },
];
let songListLength = songList.length - 1;
let i = 0;
let songPlaying = false;



function playSong() {
    songPlaying = true;
    playPush.innerHTML = '<ion-icon name="pause-outline"></ion-icon>';
    musicName.innerHTML = songList[i].Name;
    audio.src = songList[i].path;
    playPush.classList.add('active');
    audio.play();
    console.log("now playing");
}

function pushSong() {
    songPlaying = false;
    playPush.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
    playPush.classList.remove('active');
    audio.pause();
    console.log("now push");
}

playPush.addEventListener('click', function () {
    if (songPlaying) {
        pushSong()

    } else {
        playSong()

    }
})
next.onclick = function () {
    
    i = i + 1;
    if(i > songListLength){
        i = 0;
        playSong()
        console.log(i);
    }else{
        playSong();
        console.log(i);
    }
    
    
}
prev.onclick = function(){
    i = i - 1;
    if(i < 0){
        i = songListLength; 
        playSong()
        console.log(i);
    }else{
        playSong();
        console.log(i);
    }
}












// let songPlaying = false;

// function playSong() {
//     songPlaying = true;
//     audio.play();
// }

// function pushSong() {
//     songPlaying = false;
//     audio.pause();
// }

// playPush.addEventListener('click' , function(){
//     if(songPlaying){
//         console.log("Song Already Playing");
//     }else{
//         playSong();
//     }




// })


// function loadSong(songList){
//     title.textContent = songList.Name;
//     audio.src = songList.path;
// }
// let i = 0;
// loadSong(songList[i])