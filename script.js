const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const game = document.getElementById("game");
const music = document.getElementById("bgMusic");

startBtn.addEventListener("click", function(){

// Play music after user click (mobile safe)
music.play().catch(()=>{});

intro.style.transition="0.8s";
intro.style.opacity="0";

setTimeout(()=>{
intro.classList.add("hidden");
game.classList.remove("hidden");
},800);

});
