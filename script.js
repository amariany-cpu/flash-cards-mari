// Aguarda o documento carregar
document.addEventListener("DOMContentLoaded", () => {
    const cartoes = document.querySelectorAll(".cartao");
    const contadorElemento = document.getElementById("qtd-virados");
    const cardsExplorados = new Set();

    cartoes.forEach((cartao, index) => {
        // Ao passar o mouse no cartão, contabiliza no contador
        cartao.addEventListener("mouseenter", () => {
            if (!cardsExplorados.has(index)) {
                cardsExplorados.add(index);
                contadorElemento.textContent = cardsExplorados.size;

                // Mensagem especial ao completar todos
                if (cardsExplorados.size === cartoes.length) {
                    setTimeout(() => {
                        alert("Parabéns, Mariany! Você já descobriu todas as 15 tags HTML! 🎉🌸");
                    }, 500);
                }
            }
        });
    });
});