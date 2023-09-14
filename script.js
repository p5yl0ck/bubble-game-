let timer = 60
let score = 0
let rn = 0
let newHit = document.getElementById("box1")
let upScore = document.getElementById("box3")
let click = document.getElementById("pbtm")

function makeBubble(){
    var clutter = ""

for(var i = 0 ; i <= 167 ; i++){
     var rn = Math.floor(Math.random()*10)
     clutter += `<div class="bubble">${rn}</div>`
}

document.querySelector("#pbtm").innerHTML = clutter
}

function startTimer(){
    let timerval = setInterval(function(){
        timer--
        if(timer >= 0){
            document.querySelector("#box2").textContent=timer
            
        }
        else{
            document.querySelector("#pbtm").innerHTML = `<div><h2>game over </h2></div>`
            setInterval.clear()
            
        }
    },1000)
}

function getNewHit(){
    rn = Math.floor(Math.random()*10)
    newHit.textContent = rn
}

function increaseScore(){
    score += 10
    upScore.textContent = score

}

click.addEventListener("click", function(dets){
   var clickedNum = Number(dets.target.textContent);
   if (clickedNum === rn){
    increaseScore()
    makeBubble()
    getNewHit()
    
    }
});

makeBubble()
startTimer()
getNewHit()

