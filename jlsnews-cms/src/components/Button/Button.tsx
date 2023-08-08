import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import * as B from './Button.styles';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    Variant: 'Danger' | 'text' | 'Primary';
    Label: string;
}

export default function Button({ Label, Variant, ref, ...props}: ButtonProps) {
    return (
        <B.Wrapper Variant={Variant} {...props}>
            {Label}
        </B.Wrapper>
    );
}
