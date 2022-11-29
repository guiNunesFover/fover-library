import { InjectionToken } from "@angular/core";

export const BUTTON_OPTIONS = new InjectionToken('BUTTON_OPTIONS');

export class ButtonOptions
{
    public height?: 'xl' | 'l' | 'default' | 'small' | 'mini';
    public type?: 'default' | 'transparent';
}