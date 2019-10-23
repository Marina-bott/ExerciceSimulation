let slide = document.getElementById('formControlRange');
let montant = document.getElementById('valeur');
let tx = document.getElementById('taeg');
let mens = document.getElementById('mensualité');
let mtD = document.getElementById('mTD');
montant.innerHTML = slide.value; 


let taux = 0;

// Permet de déterminer le montant choisi par le client: 
slide.oninput = function()
{
    montant.innerHTML = this.value; 

    if (this.value < 1500){
        tx.innerText = '9.90%';
        taux = 9.90; 


    }if (this.value> 1500 && this.value < 3000){
        tx.innerText = '6%';
        taux = 6;
        
        
    }else if (this.value > 3000){
        tx.innerText = '5.5%';
        taux = 5.5;

    }

        mens.innerText = ((this.value * taux)/100) + ' €';

        let first = parseInt(mens.innerText);
        let scd = parseInt(this.value);
        mtD.innerText =  ((first * 12) + scd)+' €'; 
    
}


