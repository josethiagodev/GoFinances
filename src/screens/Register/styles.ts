import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color: ${ ({ theme }) => theme.colors.background };
`;

export const Header = styled.View`
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: ${RFValue(100)}px;
    background-color: ${ ({ theme }) => theme.colors.primary };
`;

export const Title = styled.Text`
    font-family: ${ ({ theme }) => theme.fonts.regular };
    font-size: ${RFValue(18)}px;
    color: ${ ({ theme }) => theme.colors.shape };
    
`;

export const ContentForm = styled.View`
    flex: 1;
    justify-content: space-between;
    width: 100%;
    padding: 32px;
`;

export const Fields = styled.View`

`;