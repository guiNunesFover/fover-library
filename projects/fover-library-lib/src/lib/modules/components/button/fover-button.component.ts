import { Component, Input } from '@angular/core';

@Component({
    selector: 'fover-button',
    templateUrl: './fover-button.component.html',
    styleUrls: ['./fover-button.component.scss']
})
export class FoverButtonComponent
{
    @Input() height: 'xl' | 'l' | 'default' | 'small' | 'mini' = 'default';
    @Input() type: 'default' | 'transparent' = 'default';
}