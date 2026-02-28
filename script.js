const startBtn=document.getElementById("startBtn");
const intro=document.getElementById("intro");
const game=document.getElementById("game");
const music=document.getElementById("bgMusic");

startBtn.onclick=()=>{

music.play().catch(()=>{});

intro.classList.add("hidden");
game.classList.remove("hidden");

}
