import React from 'react';

import { 
    Container, 
    Title, 
    Amount, 
    Footer, 
    Category, 
    Icon, 
    Name, 
    Date
} from './styles';

interface CategoryProps {
    name: string;
    icon: string;
}

export interface TransactionsCardProps {
    type: 'positive' | 'negative';
    title: string;
    amount: string;
    category: CategoryProps;
    date: string;
}

interface PropsTransaction {
    data: TransactionsCardProps;
}

export function TransactionsCard( {data} : PropsTransaction ){
    return (
        <Container>
            <Title>{data.title}</Title>
            
            <Amount type={data.type}>
                { data.type === 'negative' && '- ' }
                {data.amount}
            </Amount>

            <Footer>
                <Category>
                    <Icon name={data.category.icon} />
                    <Name>{data.category.name}</Name>
                </Category>

                <Date>{data.date}</Date>
            </Footer>
        </Container>
    )
}