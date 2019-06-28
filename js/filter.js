var $inputSearch = document.querySelector('#filter');

$inputSearch.addEventListener("input", function () {
    var $patients = document.querySelectorAll(".patient");
    
    if(this.value.length > 0) {
        
        var regExpression = new RegExp(this.value, 'i'); /*case insensitive*/

        $patients.forEach( $patient => {
            let name = $patient.querySelector('.info-nome').textContent;
            
            if(!regExpression.test(name))
                $patient.classList.add('hidden');
            else
                $patient.classList.remove('hidden');

        });

    } else {
        $patients.forEach( $patient => $patient.classList.remove('hidden'));
    } 
})