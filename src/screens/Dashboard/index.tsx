import React from 'react';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionsCard, TransactionsCardProps } from '../../components/TransactionsCard';

import { 
    Container,
    Header, 
    UserWrapper,
    UserInfo, 
    Photo, 
    User, 
    UserName,
    BtnClosed, 
    ResultsCards, 
    MyTransactions, 
    TitleTransactions, 
    TransactionList
} from './styles';

export interface DataListProps extends TransactionsCardProps {
    id: string;
}

export function Dashboard(){
    const data : DataListProps[] = [
        {
            id: '1',
            type: 'positive',
            title: "Computador IMac", 
            amount: "R$ 25.500,00",
            category: {
                name: 'Tecnologia',
                icon: 'monitor'
            },
            date: "13/01/2022"
        }, 
        {
            id: '2',
            type: 'negative',
            title: "UX Design (Usabilidade)", 
            amount: "R$ 1.000,00",
            category: {
                name: 'Serviço autonomo',
                icon: 'smile'
            },
            date: "14/01/2022"
        }, 
        {
            id: '3',
            type: 'positive',
            title: "PC Gamer Ryzen 5", 
            amount: "R$ 4.500,00",
            category: {
                name: 'Tecnologia',
                icon: 'monitor'
            },
            date: "15/01/2022"
        },
        {
            id: '4',
            type: 'negative',
            title: "UX Research", 
            amount: "R$ 2.500,00",
            category: {
                name: 'Serviço Freelancer',
                icon: 'search'
            },
            date: "16/01/2022"
        }
    ];

    return (
        <Container>

            <Header>
                <UserWrapper>
                    <UserInfo>
                        <Photo 
                            source={{ uri: 'https://avatars.githubusercontent.com/u/56521337?v=4' }} 
                        />
                        <User>
                            <UserName>José Thiago</UserName>
                        </User>
                    </UserInfo>

                    <BtnClosed name="power" />
                </UserWrapper>
            </Header>

            <ResultsCards>
                <HighlightCard 
                    type="up" 
                    title="Entradas" 
                    amount="R$ 15.500,00" 
                    lastTransaction="Última entrada dia 13 de Abril" 
                />
                <HighlightCard 
                    type="down" 
                    title="Saídas" 
                    amount="R$ 1.500,00" 
                    lastTransaction="Última saída dia 01 de Abril" 
                />
                <HighlightCard 
                    type="total" 
                    title="Total" 
                    amount="R$ 17.000,00" 
                    lastTransaction="Resultados de 01 à 15 de Abril"
                />
            </ResultsCards>

            <MyTransactions>
                <TitleTransactions>Minhas transações</TitleTransactions>
                <TransactionList 
                    data={data} 
                    keyExtractor={ item  => item.id }
                    renderItem={ ({ item }) => <TransactionsCard data={item} /> }
                />
            </MyTransactions>

        </Container>
    )
}