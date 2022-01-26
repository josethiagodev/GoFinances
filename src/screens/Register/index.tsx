import React, { useState } from 'react';
import { 
    Modal, 
    TouchableWithoutFeedback, 
    Keyboard, 
    Alert
} from 'react-native';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useForm } from 'react-hook-form';

import { Input } from '../../components/Forms/Input';
import { InputForm } from '../../components/Forms/InputForm';
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

interface FormData {
    name: string;
    amount: string;
}

// Add Schema com YUP
const schema = Yup.object().shape({
    name: Yup
        .string()
        .required('O nome é obrigatório'),
    amount: Yup
        .number()
        .typeError('Infome um valor númerico')
        .positive('O valor não pode ser negativo'),

});

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

    const {
        control, 
        handleSubmit, 
        formState: { errors }
    } = useForm({
        // Forçar o envio do formulário (submit) siga o padrão do 'Schema via Yup'
        resolver: yupResolver(schema) 
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

    // Registrando dados do formulário (react hook form)
    function handleRegister(form : FormData) {
        // Validação dos dados (states)
        if(!transactionType)
            return Alert.alert('Selecione o tipo da transação')

        if(category.key === 'category')
            return Alert.alert('Selecione uma categoria')

        const dataRegister = {
            name: form.name, 
            amount: form.amount, 
            transactionType, 
            category: category.key
        }

        console.log(dataRegister);
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>

                <Header>
                    <Title>Cadastro</Title>
                    <Title></Title>
                </Header>
                
                <ContentForm>
                    <Fields>
                        <InputForm 
                            name="name"
                            control={control}
                            placeholder="Nome" 
                            autoCapitalize="sentences" 
                            autoCorrect={false} 
                            error={ errors.name && errors.name.message }
                        />

                        <InputForm 
                            name="amount"
                            control={control}
                            placeholder="Preço" 
                            keyboardType="numeric" 
                            error={ errors.amount && errors.amount.message }
                        />

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
                    
                    <Button 
                        title="Enviar" 
                        onPress={handleSubmit(handleRegister)}
                    />
                </ContentForm>

                <Modal visible={categoryModalOpen}>
                    <CategorySelect 
                        category={category}
                        setCategory={setCategory} 
                        closeSelectCategory={handleCloseSelectCategoryModal} 
                    />
                </Modal>

            </Container>
        </TouchableWithoutFeedback>
    );

}