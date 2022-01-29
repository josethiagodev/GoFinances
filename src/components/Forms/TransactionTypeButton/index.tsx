import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { 
    Container, 
    Button, 
    Icon, 
    Title 
} from './styles';

const icons = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
}

interface TypeButtonProps extends TouchableOpacityProps {
    type: 'up' | 'down';
    title: string;
    isActive: boolean;
}

export function TransactionTypeButton({ 
    type, 
    title, 
    isActive, 
    ...rest 
} : TypeButtonProps ) {
    return (
        <Container 
            isActive={isActive} 
            type={type} 
        >
            <Button {...rest}>
                <Icon 
                    name={icons[type]} 
                    type={type}
                />
                <Title>
                    {title}
                </Title>
            </Button>
        </Container>
    );
}