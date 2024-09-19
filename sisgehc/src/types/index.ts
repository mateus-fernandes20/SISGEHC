export default interface headerProps{
    isLoginScreen?: boolean; 
}

export interface inputProps{
    id?: string;
    placeholder: string;
    text: string;
}

export interface buttonProps{
    text: string;
    color: string;
    h: string;
    w: string;
}

export interface selectProps{
    text: string;
}

export interface textProps{
    placeholder: string;
    text: string;
}

export interface Evento{
    id: number;
    nome: string;
    professor: number;
    dataInicio: string;
    dataFim: string;
    horaInicio: string; 
    horaFim: string;
    descricao: string;
    imagem: string;
}