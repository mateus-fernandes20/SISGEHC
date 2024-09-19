export default interface headerProps{
    isLoginScreen?: boolean; 
}

export interface inputProps{
    id?: string;
    placeholder: string;
    text: string;
    // value?: string;
    // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface buttonProps{
    text: string;
    color: string;
}

export interface selectProps{
    text: string;
}

export interface textProps{
    placeholder: string;
    text: string;
}