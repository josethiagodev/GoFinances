import React from 'react';
import { Platform } from 'react-native';
import { MaterialIcons, FontAwesome5  } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();

import { Dashboard } from '../screens/Dashboard';
import { Register } from '../screens/Register';

export function AppRoutes() {
    // Usando estilos do tema
    const theme = useTheme();

    return (
        <Navigator
            screenOptions={{
                headerShown: false, 
                /* tabBarActiveBackgroundColor: theme.colors.secundary, */
                tabBarActiveTintColor: theme.colors.secundary,
                tabBarInactiveTintColor: theme.colors.text,
                tabBarLabelPosition: 'below-icon', 
                tabBarStyle: {
                    /* position: 'absolute',
                    left: 16,
                    right: 16,
                    bottom: 16,  */
                    height: 65, 
                    paddingTop: 8, 
                    paddingBottom: 10, 
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    borderRadius: 8,
                },
            }}
        >

            <Screen 
                name="Listagem" 
                component={Dashboard} 
                options={{
                    /* tabBarShowLabel: false, */ 
                    tabBarIcon: (({ size, color }) => 
                        <MaterialIcons 
                            name="format-list-bulleted" 
                            size={size} 
                            color={color}
                        />
                    )
                }} 
            />
            
            <Screen 
                name="Cadastrar" 
                component={Register} 
                options={{
                    tabBarIcon: (({ size, color }) => 
                        <MaterialIcons 
                            name="attach-money" 
                            size={size} 
                            color={color}
                        />
                    )
                }}
            />
            
            <Screen 
                name="Resumo" 
                component={Register} 
                options={{
                    tabBarIcon: (({ size, color }) => 
                        <MaterialIcons 
                            name="pie-chart" 
                            size={size} 
                            color={color}
                        />
                    )
                }}
            />

            <Screen 
                name="Perfil" 
                component={Register} 
                options={{
                    tabBarIcon: (({ size, color }) => 
                        <FontAwesome5 
                            name="user-cog" 
                            size={size} 
                            color={color}
                        />
                    )
                }}
            />

        </Navigator>
    )
}