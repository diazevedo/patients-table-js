var title = document.querySelector(".title");
title.textContent = "Luke's Nutrition";

function calculateIMC(height, weight) {
    return weight / (height * height);
}

function checkHeight(height) {
    return ( height > 0 && height < 3 );
}

function checkWeight(weight) {
    return ( weight >= 0 && weight < 1000 );
}

let $patients = document.querySelectorAll('.patient');

for(let i =0; i < $patients.length; i++) {
    
    let error = false;
    let $patient = $patients[i];

    let height = $patient.querySelector('.info-altura').textContent;
    let weight = $patient.querySelector('.info-peso').textContent;
    
    if(checkHeight(height) == false) {
        error = true;
        console.log('Invalid height');
        $patient.querySelector('.info-altura').textContent = 'Invalid height';
    }

    if(checkWeight(weight) == false) {
        error = true;
        console.log('Invalid Weight');
        $patient.querySelector('.info-peso').textContent = 'Invalid weight';
    }
    
    if(!error) {
        let imc = calculateIMC(height, weight);
        $patient.querySelector('.info-imc').textContent = imc.toFixed(2);
    } else {
        $patient.querySelector('.info-imc').textContent = 'Invalid data';
        $patient.classList.add('invalid-pacient');
    }

}

