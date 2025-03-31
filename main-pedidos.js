function showContent(id) {
    console.log("Exibindo conteúdo:", id); // Verifica o ID recebido

    // Ocultar todas as divs com a classe 'content'
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.style.display = 'none';
    });

    // Exibir a div correspondente ao item clicado
    const selectedContent = document.getElementById(id);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    } else {
        console.error("Elemento não encontrado para o ID:", id);
    }
}

// Mostrar o conteúdo inicial (opcional, por exemplo, 'dashboard' ao carregar a página)
window.onload = function() {
    showContent('cardapio'); // Exibe o dashboard inicialmente
}