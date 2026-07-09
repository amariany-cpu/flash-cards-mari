document.addEventListener("DOMContentLoaded", () => {
    const cartoes = document.querySelectorAll(".cartao");
    const contadorElemento = document.getElementById("qtd-virados");
    const cardsExplorados = new Set();

    cartoes.forEach((cartao, index) => {
        // Suporte para CELULAR: Vira ao tocar no card
        cartao.addEventListener("click", () => {
            cartao.classList.toggle("virado");
            registrarCard(index);
        });

        // Suporte para PC: Registra ao passar o mouse por cima
        cartao.addEventListener("mouseenter", () => {
            registrarCard(index);
        });
    });

    function registrarCard(index) {
        if (!cardsExplorados.has(index)) {
            cardsExplorados.add(index);
            contadorElemento.textContent = cardsExplorados.size;

            // Mensagem especial ao abrir os 15 cards
            if (cardsExplorados.size === cartoes.length) {
                setTimeout(() => {
                    alert("Parabéns, Mariany! Você já descobriu todas as 15 tags HTML! 🎉🌸");
                }, 500);
            }
        }
    }
});