import { Component } from '@angular/core';
import { FoverNotificationService } from 'projects/fover-library-lib/src/public-api';

@Component({
    selector: 'notifications',
    templateUrl: './notifications.page.html',
    styleUrls: ['./notifications.page.scss']
})
export class NotificationPage 
{
    public codeDefault: string;
    public showCodeDefault: boolean;

    constructor(private _foverNotificationService: FoverNotificationService) {}

    public copyCodeDefault(): void {
        this._foverNotificationService.danger(["teste"]);
    }
}