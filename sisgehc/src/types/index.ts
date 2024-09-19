export default interface headerProps{
    isLoginScreen?: boolean; 
}

export interface inputProps{
    id?: string;
    placeholder: string;
    text: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface buttonProps{
    text: string;
    color: string;
}

export interface selectProps{
    text: string;
    value: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface dataProps{
    text: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


export interface textProps{
    placeholder: string;
    text: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface inputFileProps {
    id?: string;
    name: string;
    text: string;
    
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}