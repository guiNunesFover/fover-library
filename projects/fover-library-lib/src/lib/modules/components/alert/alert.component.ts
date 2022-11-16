import { Component, Input } from '@angular/core';

@Component({
    selector: 'fover-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class FoverAlertComponent 
{
    @Input() title: string;
    @Input() message: string;
}
