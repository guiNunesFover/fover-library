import { InjectionToken } from '@angular/core';
import { ThemeEnum } from './theme.enum';

export const THEMES = new InjectionToken('THEMES');
export const ACTIVE_THEME = new InjectionToken('ACTIVE_THEME');

export interface Theme 
{
    name: ThemeEnum;
    properties: any;
}

export interface ThemeOptions 
{
    themes?: Theme[];
    active: ThemeEnum;
}
