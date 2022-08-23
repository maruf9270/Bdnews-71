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
document.getElementById("palyer-section").addEventListener('click', function(event){
    // console.log(event.target.id)
    const click = event.target.id;
    
    // console.log(document.querySelectorAll('#playerList li '))
    const total = document.querySelectorAll('#playerList li')
    // console.log(total.length)
    if(total.length === 5){
        alert("Youv'e selectd maximum Player.")
    }
    else{
        
        switch(click){
            case 'messi':
                insertPlayer('Leonel Messi');
                disableButton('messi');
                break;
            
            case 'kylina':
                insertPlayer('Kylian Mbappé');
                disableButton('kylina');
                break;
            
            case 'naymer':
                insertPlayer('Neymar Jr');
                disableButton('naymer');
                break;

            case 'vitor':
                insertPlayer('Vítor Machado');
                disableButton('vitor');
                break;
            
            case 'ramos':
                insertPlayer('Sergio Ramos');
                disableButton('ramos');
                break;

            case 'renato':
                insertPlayer('Renato Sanches');
                disableButton('renato');
                break;

            case 'ronaldino':
                insertPlayer('Ronaldinho');
                disableButton('ronaldino');
                break;

            case 'ronaldo':
                insertPlayer('Cristiano Ronaldo');
                disableButton('ronaldo');
                break;

            case 'romero':
                insertPlayer('Sergio Romero');
                disableButton('romero');
                break;
             }

        // if(click === 'messi'){
        //     insertPlayer('Leonel Messi');
        //     // const clicked = document.getElementById('messi');
        //     // clicked.setAttribute('disabled', true)
        //     disableButton('messi');
        // }
        // if(click === 'kylina'){
        //     insertPlayer('Mbappe');
        //     // const clicked = document.getElementById('kylina');
        //     // clicked.setAttribute('disabled', true)
        //     disableButton('kylina');
        // }

        // if(click === 'naymer'){
        //     insertPlayer('Naymer');
        //     // const clicked = document.getElementById('naymer');
        //     // clicked.setAttribute('disabled', true)
        //     disableButton('naymer');
        // }

        // if(click === 'vitor'){
        //     insertPlayer('Vítor Machado');
        //     // const clicked = document.getElementById('vitor');
        //     // clicked.setAttribute('disabled', true)
        //     disableButton('vitor');
        // }

        // if(click === 'ramos'){
        //     insertPlayer('Sergio Ramos');
        //     // const clicked = document.getElementById('ramos');
        //     // clicked.setAttribute('disabled', true)
        //     disableButton('ramos');
        // }

        // if(click === 'renato'){
        //     insertPlayer('Renato Sanches');
        //     // const clicked = document.getElementById('renato');
        //     // clicked.setAttribute('disabled', true)
        //     disableButton('renato');
        // }
        // if(click === 'ronaldino'){
        //     insertPlayer('Ronaldinho');
        //     // const clicked = document.getElementById('renato');
        //     // clicked.setAttribute('disabled', true)
        //     disableButton('ronaldino');
        // }
        // if(click === 'ronaldo'){
        //     insertPlayer('Cristiano Ronaldo');
        //     // const clicked = document.getElementById('renato');
        //     // clicked.setAttribute('disabled', true)
        //     disableButton('ronaldo');
        // }
        // if(click === 'romero'){
        //     insertPlayer('Sergio Romero');
        //     // const clicked = document.getElementById('renato');
        //     // clicked.setAttribute('disabled', true)
        //     disableButton('romero');
        // }
        

    }

})








document.getElementById('calculate').addEventListener('click', function(){
    
   
//     console.log(totalPlayer)
//     const perPlayerCostInt = parseFloat(perPlayerCost);

//     console.log(perPlayerCostInt)
//  const playerCost = perPlayerCostInt*totalPlayer;
//  console.log(playerCost);
// //  console.log('ppppp')
    const perPlayerCost = document.getElementById('perplayercost').value;
    
    const totalPlayer = document.querySelectorAll('#playerList li').length;


    const perPlayerCostFloat = parseFloat(perPlayerCost);
    console.log(isNaN(perPlayerCostFloat));

    const playerCost = perPlayerCostFloat*totalPlayer;

    // inserting valur
    const getCostField = document.getElementById('playerCost');
    getCostField.innerText = playerCost;

    
})




// Total cost section


document.getElementById("totalCost").addEventListener('click', function() {
// Total player cost
    const totaPlayerCost = document.getElementById('playerCost').innerText;
    const totaPlayerCostFloat = parseFloat(totaPlayerCost);
    // Manager cost
    const managerCost = document.getElementById("managerCost").value;
    const managerCostFloat = parseFloat(managerCost);
    

    // Coach Cost
    const coachCost = document.getElementById('coachCost').value;
    const coachCostFolat = parseFloat(coachCost);


    // Total selectiono cost
    const totalSeasonCost = totaPlayerCostFloat + managerCostFloat + coachCostFolat;
    

    // Inseritng the total season cost 
    const previouSeasonCost = document.getElementById('previouSeasonCost');
    previouSeasonCost.innerText = totalSeasonCost;
    
})

