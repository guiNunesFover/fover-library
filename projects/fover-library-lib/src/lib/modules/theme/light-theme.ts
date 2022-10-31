import { Theme } from './symbols';
import { ThemeEnum } from './theme.enum';

export const lightTheme: Theme = 
{
    name: ThemeEnum.light,
    properties: 
    {
        '--background-page': '#21272D',
        '--background-cards': '#323741',
        '--title': '#fff',
        '--placeholder': '#808289',
        
        '--primary': '#0071FF',
    }
};
