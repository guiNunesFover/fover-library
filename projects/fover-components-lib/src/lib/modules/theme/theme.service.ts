import { EventEmitter, Inject, Injectable } from '@angular/core';
import { ACTIVE_THEME, Theme, THEMES } from './symbols';
import { ThemeEnum } from './theme.enum';

@Injectable({
    providedIn: 'root'
})
export class ThemeService 
{
    public themeChange = new EventEmitter<Theme>();

    constructor(
        @Inject(THEMES) public themes: Theme[],
        @Inject(ACTIVE_THEME) public theme: string) 
    {}

    public getActiveTheme(): Theme
    {
        const theme = this.themes.find(t => t.name === this.theme);
        if (!theme) 
        {
            throw new Error(`Theme not found: '${this.theme}'`);
        }

        return theme;
    }

    public setTheme(_name: ThemeEnum): string
    {
        this.theme = _name;
        this.themeChange.emit( this.getActiveTheme());
        return this.theme;
    }
}
