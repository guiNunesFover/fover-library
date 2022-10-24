import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { darkTheme } from './dark-theme';
import { lightTheme } from './light-theme';
import { ACTIVE_THEME, ThemeOptions, THEMES } from './symbols';
import { ThemeDirective } from './theme.directive';
import { ThemeService } from './theme.service';

@NgModule({
    declarations: [ThemeDirective],
    imports: [CommonModule],
    providers: [ThemeService],
    exports: [ThemeDirective]
})

export class ThemeModule 
{
    static forRoot(options: ThemeOptions): ModuleWithProviders<ThemeModule> 
    {
        options.themes = [lightTheme, darkTheme];

        return {
            ngModule: ThemeModule,
            providers: 
            [
                { provide: THEMES, useValue: options.themes },
                { provide: ACTIVE_THEME, useValue: options.active }
            ]
        };
    }
}
