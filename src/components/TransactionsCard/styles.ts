import styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface TransactionTypeProps {
    type: 'positive' | 'negative';
}

export const Container = styled.View`
    margin: 0 0 16px 0;
    padding: 24px;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.colors.shape };
`;

export const Title = styled.Text`
    font-size: ${RFValue(16)}px;
`;

export const Amount = styled.Text<TransactionTypeProps>`
    font-family: ${({ theme }) => theme.fonts.medium };
    font-size: ${RFValue(20)}px;
    margin-top: 8px;
    margin-bottom: 8px;
    color: ${({ theme, type }) => 
        type === 'positive' ? theme.colors.success : theme.colors.attention
    };
`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Category = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(16)}px;
    color: ${({ theme }) => theme.colors.text };
`;

export const Name = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text };
    margin-left: 8px;
`;

export const Date = styled.Text`
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text };
`;