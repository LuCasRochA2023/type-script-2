import { TipoTransacao } from "../types/TipoTransacao.js";
import Conta from "../types/conta.js";
import { Transacao } from "../types/transacao.js";
import saldoComponent  from "./saldo-component.js";
import extratoComponent from "./strato-component.js";

const elementoFormulario=document.querySelector('.block-nova-transacao form') as HTMLFormElement;
elementoFormulario.addEventListener("submit", function(event){
    try{
        event.preventDefault();
        if(!elementoFormulario.checkValidity()){
            alert("Por favor, preencha o formulário!");
            return;
            
            
        }

        const inputTipoTransacao=elementoFormulario.querySelector('#tipoTransacao') as HTMLSelectElement;
        const inputValor=elementoFormulario.querySelector('#valor') as HTMLInputElement;
        const inputData=elementoFormulario.querySelector('#data') as HTMLDataElement;

        let tipoTransacao: TipoTransacao=inputTipoTransacao.value as TipoTransacao;
        let valor: number=inputValor.valueAsNumber;
        let data: Date=new Date(inputData.value);
        

        
    
        const novaTransacao: Transacao={
            tipoTransacao:tipoTransacao,
            valor:valor,
            data:data,
        }

        Conta.registrarTransacao(novaTransacao);
        extratoComponent.atualizar();
        saldoComponent.atualizar();
        elementoFormulario.reset();
    }catch(erro){
        alert(erro.message);
    }
})