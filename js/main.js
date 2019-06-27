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

let patientsTr = document.getElementsByClassName('patient');

for(let i =0; i < patientsTr.length; i++) {
    
    let error = false;

    let $heightTd = patientsTr[i].querySelector('.info-altura');
    let $weightTd = patientsTr[i].querySelector('.info-peso');
    let $imcTd = patientsTr[i].querySelector('.info-imc');

    let weight = $weightTd.textContent;
    let height = $heightTd.textContent;
    
    if(checkWeight(weight) == false) {
        error = true;
        console.log('Invalid Weight');
        $weightTd.textContent = 'Invalid weight';
    }

    if(checkHeight(height) == false) {
        error = true;
        console.log('Invalid height');
        $heightTd.textContent = 'Invalid height';
    }
        
    if(!error) {
        let imc = calculateIMC(height, weight);
        $imcTd.textContent = imc.toFixed(2);
    } else {
        $imcTd.textContent = 'Invalid data input';
    }
}

