import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoverButtonComponent } from './fover-button.component';
import { ButtonOptions, BUTTON_OPTIONS } from './button-options';

@NgModule({
    declarations: [
        FoverButtonComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        FoverButtonComponent,
    ],
    providers: [
        { provide: BUTTON_OPTIONS, useValue: {} },
    ]
})
export class FoverButtonModule 
{
    static forRoot(_options: ButtonOptions): ModuleWithProviders<FoverButtonModule> 
    {
        return {
            ngModule: FoverButtonModule,
            providers: 
            [
                { provide: BUTTON_OPTIONS, useValue: _options },
            ]
        };
    }
}