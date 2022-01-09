import 'styled-components';
import theme from './theme';

declare module 'styled-components' {
    // Copiando caracteristicas do arquivo 'theme'
    // e tipando dados do "ThemeType" 
    type ThemeType = typeof theme

    // Pegando a interface 'DefaultTheme' e acrescentando no "ThemeType" 
    export interface DefaultTheme extends ThemeType {}
}