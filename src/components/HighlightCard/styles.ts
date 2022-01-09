import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    width: ${RFValue(310)}px;
    margin-right: 16px;
    padding: 32px;
    border-radius: 6px;
    background-color: ${ ({ theme }) => theme.colors.shape };
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text`
    font-family: ${ ({ theme }) =>theme.fonts.regular };
    font-size: ${RFValue(16)}px;
    color: ${ ({ theme }) =>theme.colors.text_dark };
`;

export const Icon = styled(Feather)`
    font-size: ${RFValue(32)}px;
`;

export const Footer = styled.View`
`;

export const Amount = styled.Text`
    margin-top: 32px;
    font-family: ${ ({ theme }) =>theme.fonts.medium };
    font-size: ${RFValue(32)}px;
    color: ${ ({ theme }) =>theme.colors.text_dark };
`;

export const LastTransaction = styled.Text`
    font-family: ${ ({ theme }) =>theme.fonts.regular };
    font-size: ${RFValue(12)}px;
    color: ${ ({ theme }) =>theme.colors.text };
`;
