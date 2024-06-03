"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pacientes_1 = require("./pacientes");
const CG = []; // Clínico Geral
const CL = []; // Cardiologia
const OP = []; // Ortopedia
function prioridadeValor(prioridade) {
    switch (prioridade.toLowerCase()) {
        case 'emergencia':
            return 1;
        case 'urgente':
            return 2;
        case 'preferencial':
            return 3;
        case 'comum':
            return 4;
        default:
            return 0; // Erro
    }
}
function adicionar_cliente() {
    let tamanho = pacientes_1.cliente.length; // Tamanho da array cliente
    // Ordena o array de clientes com base na prioridade
    pacientes_1.cliente.sort((a, b) => prioridadeValor(a.Prioridade) - prioridadeValor(b.Prioridade));
    for (let a = 0; a < tamanho; a++) {
        // Analiza a especialidade do paciente e adiciona ele em uma das arrays
        if (pacientes_1.cliente[a].Especialista.toLowerCase() == 'clinico geral') {
            CG.push(pacientes_1.cliente[a]);
        }
        else if (pacientes_1.cliente[a].Especialista.toLowerCase() == 'cardiologia') {
            CL.push(pacientes_1.cliente[a]);
        }
        else if (pacientes_1.cliente[a].Especialista.toLowerCase() == 'ortopedia') {
            OP.push(pacientes_1.cliente[a]);
        }
    }
}
// Chama a função adicionar_clientes
adicionar_cliente();
// Mostra os resultados
console.log('\nClínico Geral:', CG);
console.log('\nCardiologia:', CL);
console.log('\nOrtopedia:', OP);
