var $table = document.querySelector('#table-patients');
$table.addEventListener('dblclick', event => {
    
    event.target.parentNode.classList.add("fadeOut");

    setTimeout( () => {
        event.target.parentNode.remove();
    }, 500);

});
