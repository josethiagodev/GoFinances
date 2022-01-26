import React, { useState } from 'react';
import { Modal } from 'react-native';

import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';
import { CategorySelect } from '../CategorySelect';

import { 
    Container, 
    Header, 
    Title,
    ContentForm, 
    Fields, 
    SectionTransactionsTypes
} from './styles';

export function Register() {

    // Armazenar qual botão está selecionado!
    const [transactionType, setTransactionType] = useState('');
    // Escondendo a Modal de categoria ao abrir
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);

    // Armazenando as categorias
    const [category, setCategory] = useState({
        key: 'category', 
        name: 'Categoria'
    });

    // Selecionar tipo de transação
    function handleTransactionsTypeSelect(type: 'up' | 'down') {
        setTransactionType(type);
    }

    // Abrindo modal de categorias
    function handleOpenSelectCategoryModal() {
        setCategoryModalOpen(true);
    }

    // Fechando modal de categorias
    function handleCloseSelectCategoryModal() {
        setCategoryModalOpen(false);
    }

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

                    <SectionTransactionsTypes>
                        <TransactionTypeButton 
                            type="up" 
                            title="Income" 
                            onPress={ () => handleTransactionsTypeSelect('up') } 
                            isActive={ transactionType === 'up' }
                        />
                        <TransactionTypeButton 
                            type="down" 
                            title="Outcome"
                            onPress={ () => handleTransactionsTypeSelect('down') } 
                            isActive={ transactionType === 'down' }
                        />
                    </SectionTransactionsTypes>

                    <CategorySelectButton 
                        title={category.name} 
                        onPress={handleOpenSelectCategoryModal}
                    />
                </Fields>
                
                <Button title="Salvar" />
            </ContentForm>

            <Modal visible={categoryModalOpen}>
                <CategorySelect 
                    category={category}
                    setCategory={setCategory} 
                    closeSelectCategory={handleCloseSelectCategoryModal} 
                />
            </Modal>

        </Container>
    );

}