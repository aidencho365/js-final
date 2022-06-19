const bgmList = [
    {
    song: "1.mp3",
    singer: "Danny Elfman",
    nameofsong: "Mission Impossible - Main Theme"
    },
    {
    song: "2.mp3",
    singer: "aespa",
    nameofsong: "Illusion"
    },    
    {
    song: "3.mp3",
    singer: "David Arnold",
    nameofsong: "007 James Bond"
    }
]
const firstBtn = document.querySelector("#lbi-submit");

const playBtn = document.querySelector("#play-btn");
const pauseBtn = document.querySelector("#pause-btn");
const bgm = document.querySelector(".bgm");

const musicSinger = document.querySelector("#music-singer");
const musicTitle = document.querySelector("#music-title");

const chosenBgm = bgmList[Math.floor(Math.random() * bgmList.length)];
const chosenSong = chosenBgm.song;
const chosenSinger = chosenBgm.singer;
const chosenNameofsong = chosenBgm.nameofsong;

function choseBgm(){
    bgm.setAttribute('src', `../bgm/${chosenSong}`);
    console.log(chosenBgm);
    musicSinger.innerText = chosenSinger;
    musicTitle.innerText = chosenNameofsong;
}



function playMusic() {
    bgm.play();
    bgm.volume = 0.5;
}

function pauseMusic() {
    bgm.pause();
}

firstBtn.addEventListener("click", choseBgm);
playBtn.addEventListener("click", playMusic);
pauseBtn.addEventListener("click", pauseMusic);