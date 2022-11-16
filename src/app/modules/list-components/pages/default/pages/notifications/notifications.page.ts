import { Component } from '@angular/core';

@Component({
    selector: 'notifications',
    templateUrl: './notifications.page.html',
    styleUrls: ['./notifications.page.scss']
})
export class NotificationPage 
{
    public codeDefault: string;
    public showCodeDefault: boolean;

    public copyCodeDefault(): void {}
}