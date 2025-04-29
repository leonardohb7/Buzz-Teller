let valorTotal = 0
let valorIngresso = 0;
let valorDesconto = 0;
console.log(` ****** BuzzFest - O seu universo pop em um só lugar. ******`);
console.log(` ****** De 2 a 4 de Maio, não vai perder essa né? ******`);
console.log(` ****** Abertura dos portões: 14h00. ******`);
console.log(` ****** Autodrómo de Interlagos, São Paulo. ******`);

for (let index = 0; index < 10; index++) {
    
    console.log(`----------------- Compra: ${index+1} -------------------------`);
    
    let diaEvento = parseInt(Math.random()*4);

    if (diaEvento == 1) {
        console.log(`Dia selecionado: 2 de Maio`);
        
    }
    
    else if (diaEvento == 2) {
        console.log(`Dia selecionado: 3 de Maio`)
    }          
    
    else {
        console.log(`Dia selecionado: 4 de Maio`)
    }
    
    let numIgressos = parseInt(Math.random()*6);

    if (numIgressos == 0) {
        numIgressos++;
    }
    
    console.log(`Numero de ingressos: ${numIgressos}`);
    
    let tipoIngresso = parseInt(Math.random()*4);
    
    if (tipoIngresso == 1) {
        tipoIngresso = "Normal";
        valorIngresso = 50;
    }
    
    else if (tipoIngresso == 2) {
        tipoIngresso = "VIP";
        valorIngresso = 100;
    }          
    
    else {
        tipoIngresso = "Premium";
        valorIngresso = 200;
    }
    
    console.log(`Tipo de ingresso selecionado: ${tipoIngresso}`);
    
    let tipoDesconto = parseInt(Math.random()*4);
    
    if (tipoDesconto == 1) {
        tipoDesconto = "Estudante";
        valorDesconto = 0.5;    
    }
    
    else if (tipoDesconto == 2) {
        tipoDesconto = "Membro do fã-clube";
        valorDesconto = 0.9;
    }          
    
    else {
        tipoDesconto = "Sem desconto";
        valorDesconto = 1;
    }
    
    console.log(`Tipo de desconto: ${tipoDesconto}`);
    
    valorTotal = (numIgressos * valorIngresso * valorDesconto);
    
    console.log(`Valor total da sua compra: R$${valorTotal},00`);
}
    