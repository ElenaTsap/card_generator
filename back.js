// Global variables
let imgLink;
let backPreview = document.getElementById("back-preview-container");
let backMessage = document.getElementById("back-message");
let backMessagePreview = document.getElementById("back-message-preview");

let nameInput = document.getElementById("name-input");
let namePreview = document.getElementById("name-preview");

let addressInput = document.getElementById("address-input");
let addressPreview = document.getElementById("address-preview");

function saveCardBack() {
    let cardBack = document.getElementById('back-preview-container').outerHTML;
    localStorage.setItem('card-back', cardBack);
}

// Function that's applied to the img container and waits for a click
// It detects which element has been clicked and extracts the value of the "src" attribute in the <img> element
// Uses that link for the background image of the front preview div
document.getElementById("border-container").addEventListener('click', (event) => {
    imgLink = event.target.getAttribute('src');
    /* backPreview.style.backgroundImage = `url(${imgLink})`; */
    backPreview.style.borderImage = `url('${imgLink}') 15`;
});

backMessage.onkeyup = backMessage.onkeypress = function() {
    backMessagePreview.innerHTML = this.value;
}

nameInput.onkeyup = nameInput.onkeypress = function() {
    namePreview.innerHTML = this.value;
}

addressInput.onkeyup = addressInput.onkeypress = function() {
    addressPreview.innerHTML = this.value;
}
