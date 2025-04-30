document.addEventListener('DOMContentLoaded', () => {
    let valorTotal = 0;
    let valorIngresso = 0;
    let valorDesconto = 0;

    const container = document.getElementById("compras");
    if (!container) return;

    //  pega texto e joga na tela dentro da caixa de compras
    function adicionarLinha(texto) {
        const p = document.createElement("p");
        p.textContent = texto;
        container.appendChild(p);
    }

    // manda frases fixas, tipo título e data do evento
    adicionarLinha("****** BuzzFest - O seu universo pop em um só lugar. ******");
    adicionarLinha("****** De 2 a 4 de Maio, não vai perder essa né? ******");
    adicionarLinha("****** Abertura dos portões: 14h00. ******");
    adicionarLinha("****** Autódromo de Interlagos, São Paulo. ******");

    // simulação de 10 clientes diferentes
    for (let i = 0; i < 10; i++) {
        adicionarLinha(`----------------- Compra: ${i + 1} -------------------------`);

        // escolhe um dia aleatório (2, 3 ou 4 de maio)
        const d = parseInt(Math.random() * 4, 10);
        const diaTexto = (d === 1) ? "2 de Maio" : (d === 2) ? "3 de Maio" : "4 de Maio";
        adicionarLinha(`Dia selecionado: ${diaTexto}`);

        // quantos ingressos o cliente vai levar (entre 1 e 5)
        let qtd = parseInt(Math.random() * 6, 10);
        if (qtd === 0) qtd = 1;
        adicionarLinha(`Número de ingressos: ${qtd}`);

        // sorteia se é ingresso Normal (R$ 50), VIP (R$ 100) ou Premium (R$ 200)
        const t = parseInt(Math.random() * 4, 10);
        if (t === 1) { valorIngresso = 50; adicionarLinha("Tipo de ingresso selecionado: Normal"); }
        else if (t === 2) { valorIngresso = 100; adicionarLinha("Tipo de ingresso selecionado: VIP"); }
        else { valorIngresso = 200; adicionarLinha("Tipo de ingresso selecionado: Premium"); }

        // sorteia se o cliente tem desconto de estudante (50%), fã-clube (10%) ou nenhum
        const td = parseInt(Math.random() * 4, 10);
        if (td === 1) { valorDesconto = 0.5; adicionarLinha("Tipo de desconto: Estudante"); }
        else if (td === 2) { valorDesconto = 0.9; adicionarLinha("Tipo de desconto: Membro do fã-clube"); }
        else { valorDesconto = 1; adicionarLinha("Tipo de desconto: Sem desconto"); }

        // multiplica quantidade × preço × desconto e mostra o valor final na tela
        valorTotal = qtd * valorIngresso * valorDesconto;
        adicionarLinha(`Valor total da sua compra: R$${valorTotal.toFixed(2)}`);
    }
});
