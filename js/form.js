
var $addButton = document.querySelector('#adicionar-paciente');

$addButton.addEventListener('click', event => {

    event.preventDefault();
    
    let $form = document.querySelector('#form-adiciona');
    let patient = patientFromForm($form);

    let errors = isPatientValid(patient);

    if(errors.length > 0) {
        mountErrorElement(errors, '#error-message', 'li');
        return;
    }
    
    addPatientToTable(patient);
    document.querySelector('#error-message').innerHTML = "";  
    $form.reset();
})

function addPatientToTable(patient) {
    let newPatientTr = createPatientTr(patient);
    document.querySelector('#table-patients').appendChild(newPatientTr);
}

function patientFromForm($form) {
    
    let patient = new Patient(
        $form.nome.value,
        $form.peso.value,
        $form.altura.value,
        $form.gordura.value
    );

    return patient;
}

function createPatientTr(patient) {

    let newTr = document.createElement('tr');
    newTr.classList.add('patient');
    
    newTr.appendChild(createTd(patient.name, 'info-nome'));
    newTr.appendChild(createTd(patient.weight, 'info-peso'));
    newTr.appendChild(createTd(patient.height, 'info-altura'));
    newTr.appendChild(createTd(patient.fat, 'info-gordura'));
    newTr.appendChild(createTd(patient.imc, 'info-imc'));

    return newTr;
}

function createTd(text, elementClass) {
    let td = document.createElement('td');
    td.classList.add(elementClass);
    td.textContent = text;

    return td;
}

function isPatientValid(patient) {

    let errors = [];

    if(patient.name.trim().length == 0)
        errors.push('Name cannot be empty.');

    if(!checkWeight(patient.weight)) 
        errors.push('Invalid weight.');

    if(!checkHeight(patient.height)) 
        errors.push('Invalid height.');

    if(patient.fat.trim().length  == 0)
        errors.push('The value of fat is invalid.');

    return errors;
}