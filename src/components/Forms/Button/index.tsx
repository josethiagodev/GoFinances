import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';

interface BtnProps extends TouchableOpacityProps {
    title: string;
    onPress: () => void;
}

export function Button( { 
    title, 
    onPress, 
    ...rest 
} : BtnProps ) {
    return (
        <Container onPress={onPress} {...rest}>
            <Title>
                { title }
            </Title>
        </Container>
    );
}