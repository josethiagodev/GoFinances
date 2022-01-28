import styled from "styled-components/native";

import { TouchableOpacity } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TouchableOpacity)`
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    border-radius: 6px;
    background-color: ${ ({ theme }) => theme.colors.secundary };
`;

export const Title = styled.Text`
    font-family: ${ ({ theme }) => theme.fonts.medium };
    font-size: ${RFValue(14)}px;
    color: ${ ({ theme }) => theme.colors.shape };
`;