
var $addButton = document.querySelector('#adicionar-paciente');

$addButton.addEventListener('click', function(event) {

    event.preventDefault();
    
    let $form = document.querySelector('#form-adiciona');
    let patient = patientFromForm($form);
    let newPatientTr = createPatientTr(patient);

    document.querySelector('#table-patients').appendChild(newPatientTr);
    
    $form.reset();
})

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