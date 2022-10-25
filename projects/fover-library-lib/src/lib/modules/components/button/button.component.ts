import { Component, Input } from '@angular/core';

@Component({
    selector: 'fover-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent
{
    @Input() height: 'xl' | 'l' | 'default' | 'small' | 'mini' = 'default';
    @Input() type: 'default' | 'transparent' = 'default';
}