
function checkout() {
    if (cart.length === 0) {
        alert("Seu carrinho está vazio.");
        return;
    }

    const orderDetails = cart.map(item => ({
        item: item.item,
        price: item.price
    }));

    console.log("Pedido enviado para o restaurante: ", orderDetails);

    // Armazenando o pedido no localStorage
    localStorage.setItem('pedidoCliente', JSON.stringify(orderDetails));

    // Resetando o carrinho e total
    cart = [];
    total = 0;
    updateCart();

    alert("Seu pedido foi enviado para o restaurante!");
}

function atualizarStatus() {
    const pedido = JSON.parse(localStorage.getItem('pedidoCliente'));
    if (pedido) {
        const statusAtual = document.getElementById("status-atual");
        statusAtual.textContent = pedido.status || "Em Preparação";

        // Atualiza a barra de status
        const barraStatus = document.querySelector('.status-indicator');
        let porcentagem = 0;

        switch (pedido.status) {
            case "Em Preparação":
                porcentagem = 30;
                break;
            case "Em Andamento":
                porcentagem = 50;
                break;
            case "Entregue":
                porcentagem = 100;
                break;
            case "Cancelado":
                porcentagem = 0;
                break;
        }

        barraStatus.style.width = porcentagem + '%';
    }
}

// Chame a função ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    atualizarStatus();
});


let cart = [];
let total = 0;


    