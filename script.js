

const next = document.getElementById("forward");
const prev = document.getElementById("backward");
const video = document.querySelector("video");
const play = document.getElementById("play");

next.addEventListener("click", () => {
    if(video.currentTime +2 <= video.duration){
       video.currentTime +=2;
    }
});
prev.addEventListener("click", () => {
    if(video.currentTime >= 2){
        video.currentTime -=2;
    }
});

video.addEventListener("timeupdate", () =>{
    const activebar = document.querySelector(".active-bar");
    const width = (video.currentTime * 100) / video.duration;
    activebar.style.width = `${width}%`;
});

play.addEventListener("click", (e) => {
    if(video.paused){
        video.play();
    }else{
        video.pause();
        // e.target.classList.remove('fa-regular fa-circle-play');
        // e.target.classList.add('fa-regular fa-circle-pause');
    }
})

const volume = document.querySelector(".volume");
volume.addEventListener("input", () => {
    const clampedVolume = Math.min(1, Math.max(0, volume.value));
    video.volume = clampedVolume;
    console.log(video.volume);
});