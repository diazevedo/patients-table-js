var title = document.querySelector(".title");
title.textContent = "Luke's Nutrition";

function calculateIMC(height, weight) {
    return weight / (height * height);
}

let patientsTr = document.getElementsByClassName('patient');
for(let i =0; i < patientsTr.length; i++) {
    
    let height = patientsTr[i].querySelector('.info-altura').textContent;
    let weight = patientsTr[i].querySelector('.info-peso').textContent;

    let imc = calculateIMC(height, weight);
    patientsTr[i].querySelector('.info-imc').textContent = imc.toFixed(2);
}
