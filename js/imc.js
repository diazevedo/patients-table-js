function calculateIMC(height, weight) {

    let imc = 0;
    
    imc = weight / (height * height);

    return imc.toFixed(2);
}

function checkHeight(height) {
    return ( height > 0 && height < 3 );
}

function checkWeight(weight) {
    return ( weight >= 0 && weight < 1000 );
}