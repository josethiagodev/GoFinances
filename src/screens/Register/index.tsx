import React from 'react';

import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';

import { 
    Container, 
    Header, 
    Title,
    ContentForm, 
    Fields
} from './styles';

export function Register() {
    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
                <Title></Title>
            </Header>
            
            <ContentForm>
                <Fields>
                    <Input placeholder="Nome" />
                    <Input placeholder="Preço" />
                </Fields>
                <Button title="Salvar" />
            </ContentForm>
        </Container>
    );
}