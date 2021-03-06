import styled from 'styled-components/native';

import { FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import{ getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';

import { DataListProps } from '.';

export const Container = styled.View`
    flex: 1;
    background-color: ${ ({ theme }) => theme.colors.background };
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(40)}px;
    background-color: ${ ({ theme }) => theme.colors.primary };
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
`;

export const UserWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: ${getStatusBarHeight() + RFValue(28)}px;
    padding: 0 24px;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Photo = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 48px;
`;

export const User = styled.View`
    margin-left: 16px;
`;

export const UserName = styled.Text`
    color: ${ ({ theme }) => theme.colors.shape };
    font-size: ${RFValue(16)}px;
    font-family: ${ ({ theme }) => theme.fonts.medium };
`;

export const BtnClosed = styled(Feather)`
    color: ${ ({ theme }) => theme.colors.secundary };
    font-size: ${RFValue(24)}px;
`;

export const ResultsCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false, 
    contentContainerStyle: { paddingHorizontal: 24 },
})`
    position: absolute;
    width: 100%;
    margin-top: ${RFPercentage(20)}px;
`;

export const MyTransactions = styled.View`
    flex: 1;
    padding: 0 24px;
    margin-top: ${RFPercentage(16)}px;
`;

export const TitleTransactions = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${ ({ theme }) => theme.fonts.regular };
    margin-bottom: 16px;
`;

export const TransactionList = styled(
    // Criando uma nova tipagem para a FlatList
    FlatList as new () => FlatList<DataListProps>
    ).attrs({
    showsVerticalScrollIndicator: false, 
    contentContainerStyle: {
        paddingBottom: getBottomSpace()
    }
})`
    
`;