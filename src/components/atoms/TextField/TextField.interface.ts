import { InputHTMLAttributes } from 'react';


export interface TextFieldProps
  extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    id: string;
    name?: string;
    Group?: Node;
}