import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';

interface BtnProps extends TouchableOpacityProps {
    title: string;
}

export function Button( { title, ...rest } : BtnProps ) {
    return (
        <Container {...rest}>
            <Title>
                { title }
            </Title>
        </Container>
    );
}