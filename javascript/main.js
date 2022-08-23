document.getElementById("palyer-section").addEventListener('click', function(event){
    const click = event.target.id;
    const allPlayr = ['messi','kylina','naymer','vitor','ramos','renato','ronaldino','ronaldo','romero'];

    if(allPlayr.includes(click) === true){
        const total = document.querySelectorAll('#playerList li')
        
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

            
            

        }
        
    }
    
    

})








document.getElementById('calculate').addEventListener('click', function(){
    
    const perPlayerCost = document.getElementById('perplayercost').value;
    
    if(isNaN(perPlayerCost)===false){
        const totalPlayer = document.querySelectorAll('#playerList li').length;


        const perPlayerCostFloat = parseFloat(perPlayerCost);

        const playerCost = perPlayerCostFloat*totalPlayer;

        // inserting valur
        const getCostField = document.getElementById('playerCost');
        getCostField.innerText = playerCost;

    }
    else{
        alert("Please input numaric value in the per player field");
    }
    

    
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

    if(isNaN(coachCost) === false && isNaN(managerCost)=== false){
         // Total selectiono cost
        const totalSeasonCost = totaPlayerCostFloat + managerCostFloat + coachCostFolat;
    

        // Inseritng the total season cost 
        const previouSeasonCost = document.getElementById('previouSeasonCost');
        previouSeasonCost.innerText = totalSeasonCost;

    }
    else{
        alert("Please Input numeric value in the Manager and coach field");
    }


   
   
    
})

