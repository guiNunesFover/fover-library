import { Component, Inject, Input, OnInit } from '@angular/core';
import { ButtonOptions, BUTTON_OPTIONS } from './button-options';

@Component({
    selector: 'fover-button',
    templateUrl: './fover-button.component.html',
    styleUrls: ['./fover-button.component.scss']
})
export class FoverButtonComponent implements OnInit
{
    @Input() height: 'xl' | 'l' | 'default' | 'small' | 'mini';
    @Input() type: 'default' | 'transparent' | 'border';

    constructor(@Inject(BUTTON_OPTIONS) public options: ButtonOptions) {}
    
    ngOnInit(): void 
    {
        this.setGlobalConfig();
    }

    private setGlobalConfig(): void
    {
        if (this.options)
        {
            this.height = this.options.height ?? this.height ?? 'default';
            this.type = this.options.type ?? this.type ?? 'default';
        }
    }
}