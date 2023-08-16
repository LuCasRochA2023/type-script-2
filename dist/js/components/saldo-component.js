import { formatarMoeda, formatarData } from "../utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/conta.js";
const elementoDataAcesso = document.querySelector('.saldo-valor .valor');
const elementoSaldo = document.querySelector('.saldo-valor .valor');
if (elementoDataAcesso != null) {
    elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_MES_ANO);
}
renderizarSaldo();
export function renderizarSaldo() {
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
    }
}
const saldoComponent = {
    atualizar() {
        renderizarSaldo();
    }
};
export default saldoComponent;
