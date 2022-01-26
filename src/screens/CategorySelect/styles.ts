import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import theme from '../../global/styles/theme';

interface CategoryProps {
    isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background };
`;

export const Header = styled.View`
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${RFValue(100)}px;
    padding-top: ${RFValue(20)}px;
    background-color: ${({ theme }) => theme.colors.primary };
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular };
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.shape };
`;

export const CategoryList = styled.TouchableOpacity<CategoryProps>`
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: ${RFValue(15)}px;
    background-color: ${({ isActive }) =>
        isActive ? theme.colors.secundary_light : theme.colors.background
    };
`;

export const Icon = styled(Feather)`
    padding: ${RFValue(8)}px ${RFValue(0)}px;
    margin-right: 16px;
    font-size: ${RFValue(18)}px;

`;

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular };
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text_dark };
`;

export const Separator = styled.View`
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.text };
`;

export const Footer = styled.View`
    width: 100%;
    padding: 24px;
`;