import { Component, Input, OnInit } from '@angular/core';
import { FoverNotificationModel } from '../../model/fover-notification.model';
import { FoverNotificationService } from '../../services/fover-notification.service';

@Component({
    selector: 'fover-notification-area',
    templateUrl: './fover-notification-area.component.html',
    styleUrls: ['./fover-notification-area.component.scss']
})
export class FoverNotificationAreaComponent implements OnInit
{
    @Input() durationSecond: number = 10;
    public listNotifications: Array<FoverNotificationModel> = [];

    constructor(private _foverNotificationService: FoverNotificationService) {}

    ngOnInit(): void 
    {
        this._foverNotificationService.notifier.subscribe(resp =>
        { 
            this.listNotifications.push({
                status: resp.status,
                title: resp.title,
                message: resp.message,
                extraInfo: resp.extraInfo,
                stateVisible: 'visible'
            });
        },
        error => console.error(error));
    }

    public closeCard(_itemNotification?: FoverNotificationModel): void
    {
        if (_itemNotification)
        {
            const indexOf = this.listNotifications.indexOf(_itemNotification);
            if (indexOf != -1) this.listNotifications.splice(indexOf, 1);
        }
    }
}
