const song = document.getElementById('audio');
const playBtn = document.querySelector('#play');


let isPlayingMusic = false;

const playMusic = () => {
    isPlayingMusic = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    song.play();
}
const pauseMusic = () => {
    isPlayingMusic = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    song.pause();
}
playBtn.addEventListener('click', () => {
    (isPlayingMusic ? pauseMusic() : playMusic());
});
