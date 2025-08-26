// Seleciona todos os botões de sessão da página
const sessionButtons = document.querySelectorAll('.session-btn');

// Adiciona um "ouvinte de evento" de clique para cada botão
sessionButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        // Impede que o link (href="#") funcione
        event.preventDefault();

        // Exibe o alerta
        alert('Função de compra de ingressos não implementada. Esta é apenas uma demonstração visual.');
    });
});