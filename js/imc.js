function calculateIMC(height, weight) {

    let imc = 0;
    
    imc = weight / (height * height);

    return imc.toFixed(2);
}

function checkHeight(height) {
    return ( height.trim().length > 0 && height > 0 && height < 3 );
}

function checkWeight(weight) {
    return ( weight.trim().length > 0 && weight >= 0 && weight < 1000 );
}