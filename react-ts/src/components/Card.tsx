import React, {useState} from 'react'

export enum CardVariable {
    outlined = "outlined",
    primary = 'primary'
}

interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariable;
    onClick: (message: number) => void;
}

const Card: React.FC<CardProps> = ({width, height, children, variant, onClick}) => {
    const [state, setState] = useState(0)
    return (
        <div style={{width, height, border: variant === CardVariable.outlined ? '3px solid #ccc' : 'none',
        background: variant === CardVariable.primary ? 'lightgray' : ''}} onClick={() => onClick(state)}>
            {children}
            <div>123</div>
        </div>
    )
}

export default Card