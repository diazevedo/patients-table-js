'use strict';

var title = document.querySelector(".title");
title.textContent = "Luke's Nutrition";
let $patients = document.querySelectorAll('.patient');

$patients.forEach( $patient => {
      
    let error = false;

    let height = $patient.querySelector('.info-altura').textContent;
    let weight = $patient.querySelector('.info-peso').textContent;
    
    if(!checkHeight(height)) {
        error = true;
        console.log('Invalid height');
        $patient.querySelector('.info-altura').textContent = 'Invalid height';
    }

    if(!checkWeight(weight)) {
        error = true;
        console.log('Invalid Weight');
        $patient.querySelector('.info-peso').textContent = 'Invalid weight';
    }
    
    if(!error) {
        $patient.querySelector('.info-imc').textContent = calculateIMC(height, weight);
    } else {
        $patient.querySelector('.info-imc').textContent = 'Invalid data';
        $patient.classList.add('invalid-pacient');
    }
});

function mountErrorElement(errors, elementParentSelector, elementChildTag) {
    
    document.querySelector(elementParentSelector).innerHTML = "";

    let parent = document.querySelector(elementParentSelector);
    errors.forEach( error => {
        let child = document.createElement(elementChildTag);
        child.textContent = error;
        parent.appendChild(child);
    });
}
