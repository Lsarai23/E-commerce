import { catalogo } from "./utilidades";
import { adicionarCarrinho } from "./menuCarrinho";

export function renderizarCatalogo(){
for(const produto of catalogo){
    const cartaoProduto=`<div class ="flex flex-col pb-2 justify-between border-solid border-2 border-indigo-600 m-2 w-48 shadow-lg shadow-slate-500 rounded-lg group ${produto.classe}" id="card-${produto.id}">
    <img src="./assets/img/${produto.imgArquivo}" alt="${produto.nome}" class="rounded-lg group-hover:scale-110 duration-300 my-3">
    <p class="text-sm">${produto.nome}</p>
    <p class="text-sm text-slate-400">${produto.tipo}</p>
    <p class="text-sm text-green-600">$${produto.preco}</p>
    <button id="adicionar-${produto.id}"class="bg-orange-700 hover:bg-orange-500"><i class="fa-solid fa-cart-plus"></i></button>
    </div>`;
    
    document.getElementById("container-produto").innerHTML+=cartaoProduto;
}
for(const produtoCatalogo of catalogo){
    document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener("click",()=>adicionarCarrinho(produtoCatalogo.id));
}
}
