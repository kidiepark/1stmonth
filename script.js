const image = document.getElementById('yashimage');
const audio = document.getElementById('season');

image.addEventListener('mouseenter', () => {
    audio.currentTime = 0;
    audio.play();
});

image.addEventListener('mouseleave', () => {
    audio.pause();
});



audio.volume = 0.6;