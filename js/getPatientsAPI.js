var $buttonGetPatients = document.querySelector('#get-patients');
const url = "https://api-pacientes.herokuapp.com/pacientes";

$buttonGetPatients.addEventListener('click', (event) => {
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    
    xhr.addEventListener("load", () => {   
        if(xhr.status == 200) {
            document.querySelector('#error-get-patients').classList.add('hidden');
            
            var patients = JSON.parse(xhr.responseText);
        
            patients.forEach( patient => {
                var patientObj = new Patient(patient.nome, patient.peso, patient.altura, patient.gordura);
                addPatientToTable(patientObj);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            document.querySelector('#error-get-patients').classList.remove('hidden');
        }
    });

    xhr.send();
})