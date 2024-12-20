
function toggleDropdown() {
    const dropdown = document.getElementById("dropdown");
    
    console.log("Before toggle, classes:", dropdown.classList);
    dropdown.classList.toggle("show");
    console.log("After toggle, classes:", dropdown.classList);
}



document.addEventListener("DOMContentLoaded", function () {
    const button1 = document.getElementById("bt1");
    const button2 = document.getElementById("bt2");
    const hc1 = document.getElementById("hc1");
    const hc2 = document.getElementById("hc2");
    const button3 = document.getElementById("bt3")
    const button4 = document.getElementById("mainbtn")
    const content = document.getElementById("main")
    const button5 = document.getElementById("bt4")
    const hc3 = document.getElementById("hc3")
    const aplay = document.getElementById("vm")
    const hc5 = document.getElementById("hc5")
    const image = document.getElementById("image1")
    
    const vm = new Audio('audio/shortvm1.m4a')
    const music = new Audio('audio/marcilikeher.mp4')
    music.volume = 0.03;
    vm.volume = 1;

    button1.addEventListener("click", function () {
        hc1.classList.toggle("show");
        button1.textContent = hc1.classList.contains("show")
            ? "Close"
            : "I love you so much my Yashtine!";
    });

    button2.addEventListener("click", function () {
        hc2.classList.toggle("show");
        button2.textContent = hc2.classList.contains("show")
            ? "Close"
            : "Happy 2nd monthsary, you are my everything!";
    });

    button3.addEventListener("click", function() {
        image1.classList.toggle("show");
        button3.textContent = image1.classList.contains("show")
            ?"Click the image to redirect to the video"
            :"here's a little and quick montage I lost all the past recordings we had sa old pc ko huhu"
    });
    button4.addEventListener("click", function(){
        main.classList.toggle("show")
        button4.textContent = main.classList.contains("show")
        ?"I love you!"
        :"The poems I made are all about you, there's no reason for me to make more poems if I don't have you."

        if(!music.paused) {
            music.currentTime = 0;
        }
        
        hc5.classList.toggle("hidden");

        music.play();

    });
    
    button5.addEventListener("click", function() {
        hc3.classList.toggle("show");
        button5.textContent = hc3.classList.contains("show")
        ?"you're worth every poem my baby!"
        :"My Poem for you"
    })

    aplay.play();
    aplay.muted = false;

});

