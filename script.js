document.addEventListener("DOMContentLoaded", () => {
    const cartoes = document.querySelectorAll(".cartao");
    const contadorElemento = document.getElementById("qtd-virados");
    const cardsExplorados = new Set();

    cartoes.forEach((cartao, index) => {
        
        // 1. COMPATIBILIDADE COM CELULAR: Vira e desvira ao clicar/tocar
        cartao.addEventListener("click", () => {
            cartao.classList.toggle("virado");
            contabilizarCard(index);
        });

        // 2. COMPATIBILIDADE COM PC: Contabiliza ao passar o mouse
        cartao.addEventListener("mouseenter", () => {
            contabilizarCard(index);
        });
    });

    // Função única para controlar a pontuação
    function contabilizarCard(index) {
        if (!cardsExplorados.has(index)) {
            cardsExplorados.add(index);
            contadorElemento.textContent = cardsExplorados.size;

            // Alerta fofinho quando terminar tudo
            if (cardsExpl