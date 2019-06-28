'use strict';

var title = document.querySelector(".title");
title.textContent = "Luke's Nutrition";

function calculateIMC(height, weight) {
    console.log(arguments)
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

var $addButton = document.querySelector('#adicionar-paciente');
$addButton.addEventListener('click', function(event) {
    
    event.preventDefault();
    
    let $form = document.querySelector('#form-adiciona');
    let patientName = $form.nome.value;
    let patientHeight = $form.altura.value;
    let patientWeight = $form.peso.value;
    let patientFat = $form.gordura.value;
    
    let newRow = document.createElement('tr');
    newRow.classList.add('patient');
    
    var tdName = document.createElement('td');
    tdName.classList.add('info-nome');
    tdName.textContent = patientName;
    newRow.appendChild(tdName);
   
    let tdWeigth = document.createElement('td');
    tdWeigth.classList.add('info-peso');
    tdWeigth.textContent = patientWeight;
    newRow.appendChild(tdWeigth);

    let tdHeigth = document.createElement('td');
    tdHeigth.classList.add('info-altura');
    tdHeigth.textContent = patientHeight;
    newRow.appendChild(tdHeigth);

    let tdFat = document.createElement('td');
    tdFat.classList.add('info-gordura');
    tdFat.textContent = patientFat;
    newRow.appendChild(tdFat);

    let tdImc = document.createElement('td');
    tdImc.classList.add('info-imc');
    tdImc.textContent = calculateIMC(patientHeight, patientWeight).toFixed(2);
    newRow.appendChild(tdImc);

    document.querySelector('#table-patients').appendChild(newRow);
    
})

