function calculate(){
    let score = 100;

    if(document.getElementById("1").checked){
        //Question: Held hands romantically?
        score = score - 1;
    }

    if(document.getElementById("2").checked){
        //Question: Been on a date?
        score = score - 25;
    }

    if(document.getElementById("3").checked){
        //Question: Been in a relationship?
        score = score - 50;
    }

    if(document.getElementById("4").checked){
        //Question: Danced without leaving room for Jesus?
        score = score - 75;
    }

    if(document.getElementById("5").checked){
        //Question: Kissed a non-family member?
        score = score - 100;
    }

    playResult(score);
}

function playResult(score){
    if (score>=95) {
        document.body.innerHTML = `<div>
        <h1 class="totalScore">Total Score: ${score}</h1>
        <img src="assets/images/Holy Ending.jpg" alt="Clouds and a cross hovering over them.">
        </div>
        `;
        var audio = new Audio('assets/sounds/HolyEnding.MP3');
        audio.play();
    }else if(score>=75){
        document.body.innerHTML = `<div>
        <h1 class="totalScore">Total Score: ${score}</h1>
        <img src="assets/images/AverageEnding.jpg" alt="An old man smiling with a thumbs up.">
        </div>
        `;
        var audio = new Audio('assets/sounds/AverageEnding.MP3');
        audio.play();
    }else if(score>=50){
        document.body.innerHTML = `<div>
        <h1 class="totalScore">Total Score: ${score}</h1>
        <img src="assets/images/BorderlineMoralEnding.jpg" alt="Gus fring being nervous for the first time.">
        </div>
        `;
        var audio = new Audio('assets/sounds/BorderlineMoralEnding.MP3');
        audio.play();
    }else if(score>=25){
        document.body.innerHTML = `<div>
        <h1 class="totalScore">Total Score: ${score}</h1>
        <img src="assets/images/SayGoodByeToHeaven.jpg" alt="An old man smiling with a thumbs up.">
        </div>
        `;
        var audio = new Audio('assets/sounds/SayGoodByeToHeaven.MP3');
        audio.play();
    }else{
        document.body.innerHTML = `<div>
        <h1 class="totalScore"><span style="color:red">Total Score: ${score}</span></h1>
        <img src="assets/images/YouNeedToGoToJailEnding.jpg" alt="An old man smiling with a thumbs up.">
        </div>
        `;
        var audio = new Audio('assets/sounds/YouNeedToGoToJailEnding.MP3');
        audio.play();
    }
}