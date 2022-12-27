
const table = document.getElementById('schedule-table');
const classCard = document.querySelector('.class-card').children;
const buttonToggle = document.getElementById('toggleButton');
const buttonContent = document.getElementById('private-content-class');

function AddClassToRow(scheduleName){
    for (let row of table.rows){
        if(row.classList.contains(scheduleName)){
            row.classList.add('highlight-row')
        }
    }    
}

function removeClassFromRow(scheduleName){
    for (let row of table.rows){
        if(row.classList.contains(scheduleName)){
            row.classList.remove('highlight-row')
        }
    }    
}

function hoverCard(){
    for (let i = 0; i < classCard.length; i++) {  
        const currentCard = classCard[i].lastChild;   
           
        currentCard.addEventListener("mouseover", function() {
          const currentValue = currentCard.innerText.toLowerCase().split(' ')[0];          
          AddClassToRow(currentValue);
        });

        currentCard.addEventListener("mouseout", function() {
          const currentValue = currentCard.innerText.toLowerCase().split(' ')[0];          
          removeClassFromRow(currentValue);
        });


    }
}

buttonToggle.addEventListener('click',()=>{
    if (buttonContent.style.display === "none") {
        buttonContent.style.display = "block";
    } else {
        buttonContent.style.display = "none";
    }
})

hoverCard();