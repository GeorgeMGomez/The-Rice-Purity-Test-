function calculate(){
    let score = 100;

    if(document.getElementById("1").checked){
        //Question: Held hands romantically?
        score = score - 1;
    }

    if(document.getElementById("2").checked){
        //Question: Been on a date?
        score = score - 1;
    }

    if(document.getElementById("3").checked){
        //Question: Been in a relationship?
        score = score - 1;
    }

    if(document.getElementById("4").checked){
        //Question: Danced without leaving room for Jesus?
        score = score - 1;
    }

    if(document.getElementById("5").checked){
        //Question: Kissed a non-family member?
        score = score - 1;
    }

    playResult(score);
}

function playResult(score){
    if (score>=95) {
        document.body.innerHTML = `<div>
        <h1 class="totalScore">Total Score: ${score}</h1>
        <img src="/assets/images/Holy Ending.jpg" alt="Clouds and a cross hovering over them">
        </div>
        `;
    }else if(score>=75){
        
    }
}