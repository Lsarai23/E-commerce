import { lerLocalStorage,desenharCarrinhoComprar } from "./src/utilidades";

function criarPedidoHistorico(pedidosJaFeitos){
    const elementoPedido=`<p class="text-xl text-bold my-4">${new Date(pedidosJaFeitos.dataPedido).toLocaleDateString("pt-BR",{hour:"2-digit",minute:"2-digit"})}</p>
    <section id="container-pedidos-${pedidosJaFeitos.dataPedido}" class="bg-slate-300 p-3 rounded-lg" ></section> `;
    const main = document.getElementsByTagName("main")[0];
    main.innerHTML+=elementoPedido;

    for(const idProduto in pedidosJaFeitos.pedido){
        desenharCarrinhoComprar(idProduto,`container-pedidos-${pedidosJaFeitos.dataPedido}`,pedidosJaFeitos.pedido[idProduto]);
    }

}

function renderizarHistorico(){
    const historico=lerLocalStorage("historico");
    for(const pedidos of historico){
        criarPedidoHistorico(pedidos);
    }
}

renderizarHistorico(); 