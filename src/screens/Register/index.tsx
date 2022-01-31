import React, { useState } from 'react';
import { 
    Modal, 
    TouchableWithoutFeedback, 
    Keyboard, 
    Alert
} from 'react-native';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

// Hooks
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

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

type NavigationProps = {
    navigate:(screen:string) => void;
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

    // Definindo chave para coleção de dados
    const dataKey = '@gofinances:transactions';

    // Armazenando as categorias
    const [category, setCategory] = useState({
        key: 'category', 
        name: 'Categoria'
    });

    const navigation = useNavigation<NavigationProps>();

    const {
        control, 
        handleSubmit, 
        reset, 
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
    async function handleRegister(form : FormData) {
        // Validação dos dados (states)
        if(!transactionType)
            return Alert.alert('Selecione o tipo da transação')

        if(category.key === 'category')
            return Alert.alert('Selecione uma categoria')

        const newTransaction = {
            id: String(uuid.v4()),
            name: form.name, 
            amount: form.amount, 
            transactionType, 
            category: category.key, 
            date: new Date(),
        }

        try {
            // Recuperando todos os dados do AsyncStorage
            const dataAll = await AsyncStorage.getItem(dataKey);
            // Convertendo texto para objeto (JSON)
            const currentData = dataAll ? JSON.parse(dataAll) : [];

            // Formatando dados
            const dataFormatted = [
                ...currentData, 
                newTransaction
            ];

            // Definindo item com AsyncStorage
            await AsyncStorage.setItem(
                // stringify = Convertendo objeto (JSON) para texto
                dataKey, JSON.stringify(dataFormatted)
            );
            
            reset();
            setTransactionType('');
            setCategory({
                key: 'category', 
                name: 'Categoria'
            });

            navigation.navigate('Listagem');

        } catch (error) {
            console.log(error);
            Alert.alert("Não foi possível salvar");
        }
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
                        title="Salvar" 
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