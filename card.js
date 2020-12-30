let cardFront = localStorage.getItem('card-front');
let cardBack =  localStorage.getItem('card-back');

let allCard = cardFront + cardBack;
console.log(allCard);

document.getElementById('flip-card-inner').innerHTML = allCard;

/* console.log(document.getElementsByClassName('flip-card-inner')); */

/* document.getElementById('front-preview-container').classList.add('flip-card-front'); */

/* console.log(document.getElementById('front-preview-container'));

let frontClass = document.getElementById('front-preview-container');
frontClass.className += 'flip-card-front'; */


/* let backClass = document.getElementById('back-preview-container');
backClass.classList.add('flip-card-back'); */


function newWindow() {
    var opened = window.open("./whatever.html");
    opened.document.write(`<!DOCTYPE html>
    <html lang="en">
    
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Card Generator</title>
            <link rel="stylesheet" href="style.css">
            <link rel="preconnect" href="https://fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/css2?family=Lato&family=Raleway:wght@700&display=swap" rel="stylesheet">
            <link href="https://fonts.googleapis.com/css2?family=Cookie&family=Monoton&family=VT323&display=swap" rel="stylesheet">
            <script async src="./card.js"></script>
        </head>
    
    <body>
        <section id="viewport4">
    
            <div id="flip-card">
                <div id="flip-card-inner">
                    ${allCard}
                </div>
            </div>
    </body>
    
    </html>`);
}