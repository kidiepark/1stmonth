const image = document.getElementById('yashimage');
const audio = document.getElementById('season');

image.addEventListener('mouseenter', () => {
    audio.currentTime = 0;
    audio.play();
});

image.addEventListener('mouseleave', () => {
    audio.pause();
});

function toggleDropdown() {
    const dropdown = document.getElementById("dropdown");
    
    console.log("Before toggle, classes:", dropdown.classList);
    dropdown.classList.toggle("show");
    console.log("After toggle, classes:", dropdown.classList);
}

audio.volume = 0.6;