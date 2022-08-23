// Insert player function

function insertPlayer(playerName){
    const ul = document.getElementById('playerList');

    const li = document.createElement('li');
    li.innerText = playerName;

    ul.appendChild(li);
}


// Disable button function
function disableButton(buttonName){
    const clicked = document.getElementById(buttonName);
    clicked.setAttribute('disabled', true)
}
