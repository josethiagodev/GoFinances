import React from 'react';

import { Input } from '../../components/Forms/Input';

import { 
    Container, 
    Header, 
    Title,
    ContentForm
} from './styles';

export function Register() {
    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
                <Title></Title>
            </Header>
            
            <ContentForm>
                <Input placeholder="Nome" />
                <Input placeholder="Preço" />
            </ContentForm>
        </Container>
    );
}