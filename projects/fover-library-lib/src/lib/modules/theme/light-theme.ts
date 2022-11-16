import { Theme } from './symbols';
import { ThemeEnum } from './theme.enum';

export const lightTheme: Theme = 
{
    name: ThemeEnum.light,
    properties: 
    {
        '--background-page': '#21272D',
        '--background-cards': '#323741',
        '--background-cards-2': '#2A2E36',
        '--background-cards-3': '#000',
        '--border': '#484B55',
        '--title': '#fff',
        '--placeholder': '#808289',
        
        '--primary': '#0071FF',
        '--error': '#f2135d',
        '--warning': '#ffba00',
        '--warning-font': '#cc9500',
        '--warning-background': '#ffba0017',
    }
};
