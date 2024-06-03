export interface paciente {
    Nome: String,
    Idade: number,
    Especialista: String,
    Prioridade: String,
}

export const cliente: paciente[] = [
    {
        Nome: 'Paciente1',
        Idade: 23,
        Especialista: 'ortopedia',
        Prioridade: 'emergencia',
    },
    {
        Nome: 'Paciente2',
        Idade: 69,
        Especialista: 'cardiologia',
        Prioridade: 'preferencial',
    },
    {
        Nome: 'Paciente3',
        Idade: 9,
        Especialista: 'clinico geral',
        Prioridade: 'urgente',
    },
    {
        Nome: 'Paciente4',
        Idade: 12,
        Especialista: 'ortopedia',
        Prioridade: 'comum',
    },
    {
        Nome: 'Paciente5',
        Idade: 52,
        Especialista: 'cardiologia',
        Prioridade: 'urgente',
    },
    {
        Nome: 'Paciente6',
        Idade: 19,
        Especialista: 'clinico geral',
        Prioridade: 'emergencia',
    },
];