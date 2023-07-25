// Variables
let body = document.body;
let advice = document.getElementById('advice');
let adviceNum = document.getElementById('adviceCount');
let newQouteBtn = document.getElementById('generate');

function getAdvice(){
    const url = fetch('	https://api.adviceslip.com/advice');

    url.then(res => res.json())
    .then(data => {
        adviceNum.innerText = `Advice #${data.slip.id}`
        advice.innerText = `"${data.slip.advice}"`;

    });
}

// getAdvice();

// Event Listeners
body.onload = getAdvice();

newQouteBtn.addEventListener('click',getAdvice);