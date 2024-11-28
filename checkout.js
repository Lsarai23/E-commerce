import { desenharCarrinhoComprar,lerLocalStorage,apagarDoLocalStorage,salvarLocalStorage } from "./src/utilidades";
import { renderizarPT } from "./src/menuCarrinho";



function desenharProdNoCheckout(){
    const idQtdProdutos= lerLocalStorage("carrinho") ?? {};
    for(const idProdFin in idQtdProdutos){
        desenharCarrinhoComprar(idProdFin,"produtos-carrinho",idQtdProdutos[idProdFin]);
    }
    renderizarPT();
} 

function finalizarCompra(evento){
    const idQtdProdutos= lerLocalStorage("carrinho") ?? {};
    evento.preventDefault();
    if(Object.keys(idQtdProdutos)===0){
        return;
    }
    const dataAtual=new Date();
    const pedidoFeito={
        dataPedido:dataAtual,
        pedido:idQtdProdutos,
    }
    const historicoPedidos=lerLocalStorage("historico") ?? [];
    const historicoAtualizado = [pedidoFeito, ...historicoPedidos];

    salvarLocalStorage("historico",historicoAtualizado);
    apagarDoLocalStorage("carrinho");

    window.location.href=window.location.origin+"/pedidos.html";
}

desenharProdNoCheckout();
document.addEventListener("submit",(evt) => finalizarCompra(evt));