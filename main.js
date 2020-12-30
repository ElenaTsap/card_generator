/* TODO: 
- Function to change orientation depending on portrait or landscape choice
- Function to add HTML contents of front preview div into local storage on NEXT/SUBMIT buttons
*/

/* Eleni:
    - added the changeOrientation function
    - next button saves card to the local storage
*/

// Global variables
let imgLink;
let frontPreview = document.getElementById("front-preview-container");
let frontMessage = document.getElementById("front-message");
let frontMessagePreview = document.getElementById("front-message-preview");

// Function to change the orientation of the card
function changeOrientation() {
    if (document.formOrient.orientation.value == "landscape") {
        document.getElementById('front-preview-container').style.height = '40vmin';
        document.getElementById('front-preview-container').style.width = '56.4vmin';
    } else if (document.formOrient.orientation.value == "portrait") {
        document.getElementById('front-preview-container').style.height = '56.4vmin';
        document.getElementById('front-preview-container').style.width = '40vmin';
    }
}

// Function that's applied to the img container and waits for a click
// It detects which element has been clicked and extracts the value of the "src" attribute in the <img> element
// Uses that link for the background image of the front preview div
document.getElementById("img-container").addEventListener('click', (event) => {
    imgLink = event.target.getAttribute('src');
    frontPreview.style.backgroundImage = `url(${imgLink})`;
});

// Function to read the custom link input value and change background image styling of front preview div
function addCustomURL() {
    imgLink = document.getElementById("custom-url").value;
    frontPreview.style.backgroundImage = `url(${imgLink})`;
}

// Function to detect user typing input into the textarea, renders text as user types in front preview div
frontMessage.onkeyup = frontMessage.onkeypress = function() {
    frontMessagePreview.innerHTML = this.value;
}

// Function to read the font option from select dropdown menu and change the font styling in the front preview div
function changeFont() {
    let fontChoice = document.getElementById("font-choice");
    frontMessagePreview.style.fontFamily = fontChoice.value;
}

// function to change the color of the text
function changeColor() {
    let colorChoice = document.getElementById('color-choice');
    frontMessagePreview.style.color = colorChoice.value;
}

//function to save the card in the local storage
function saveCardFront() {
    let cardFront = document.getElementById('front-preview-container').outerHTML;
    localStorage.setItem('card-front', cardFront);
}



