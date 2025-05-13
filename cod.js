
function rolarDados(){
    let resultado1 = Math.floor(Math.random() * 6) + 1;
    let resultado2 = Math.floor(Math.random() * 6) + 1;
    let imagem1, imagem2;

    if (resultado1 === 1) {
        imagem1 = "img/dado1.png";
    }    
    else if (resultado1 === 2) {
        imagem1 = "img/dado2.png";
    } 
    else if (resultado1 === 3) {
        imagem1 = "img/dado3.png";
    } 
    else if (resultado1 === 4) {
        imagem1 = "img/dado4.png";
    } 
    else if (resultado1 === 5) {
        imagem1 = "img/dado5.png";
    } 
    else {
        imagem1 = "img/dado6.png";
    }
    if (resultado2 === 1) {
        imagem2 = "img/dado1.png";
    } 
    else if (resultado2 === 2) {
        imagem2 = "img/dado2.png";
    } 
    else if (resultado2 === 3) {
        imagem2 = "img/dado3.png";
    } 
    else if (resultado2 === 4) {
        imagem2 = "img/dado4.png";
    } 
    else if (resultado2 === 5) {
        imagem2 = "img/dado5.png";
    } 
    else {
        imagem2 = "img/dado6.png";
    }

    document.getElementById("dado1").src = imagem1;
    document.getElementById("dado2").src = imagem2;
}

