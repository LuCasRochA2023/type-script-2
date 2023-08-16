import { FormatoData } from "../types/FormatoData.js";
import { GrupoTransacao } from "../types/GrupoTransacao.js";
import Conta from "../types/conta.js";
import { formatarData, formatarMoeda } from "../utils/formatters.js";

const elementoRegistroTransacaoExtrato: HTMLElement=document.querySelector(".extrato .registro-transacoes");
renderizaExtrato();
function renderizaExtrato():void{
    const grupoTransacoes:GrupoTransacao[]=Conta.getGrupoTransacoes();
    elementoRegistroTransacaoExtrato.innerHTML="";
    let htmlRegistroTransacoes: string = "";
    for(let grupoTransacao of grupoTransacoes){
        let htmlTransacaoItem : string ="";
        
        for(let transacao of grupoTransacao.transacoes){    
             htmlTransacaoItem +=`
                <div class="transacao-item">
                    <div class="transacao-info">
                        <span class="tipo">${transacao.tipoTransacao}</span>
                        <strong class="valor">${formatarMoeda(Number(transacao.valor))}</strong>
                    </div>
                    <time class="data">${formatarData(transacao.data, FormatoData.DIA_MES)}</time>
                </div>
            `;
        }
        htmlRegistroTransacoes+=`
            <div class="transacoes-group">
                <strong class="mes-group">${grupoTransacao.label}</strong>
                ${htmlTransacaoItem}
            </div>
            `;

    }
    if(htmlRegistroTransacoes===""){
        htmlRegistroTransacoes="<div> Não há transaçoes registradas.</div>";
    }
    elementoRegistroTransacaoExtrato.innerHTML=htmlRegistroTransacoes;
}
const extratoComponent={
    atualizar():void{
        renderizaExtrato();
    }
}
export default extratoComponent