const  catalogoExibido=document.getElementById("container-produto");
import { catalogo } from "./utilidades";

function exibirTodos(){
   const escondidos= Array.from(catalogoExibido.getElementsByClassName("hidden"));
   for(const e of escondidos){
    e.classList.remove("hidden");
   }
}

function esconderProdutos(classesEsconder){
   //
}
export function testeEsconder(){
    const classe="futebol";
    esconderProdutos("futebol");
}
