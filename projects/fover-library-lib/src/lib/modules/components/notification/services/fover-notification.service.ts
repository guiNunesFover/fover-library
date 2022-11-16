import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FoverNotificationStatusEnum } from '../enum/fover-notification-status.enum';
import { FoverNotificationModel } from '../model/fover-notification.model';

@Injectable({
    providedIn: 'root'
})
export class FoverNotificationService 
{
    public notifier = new Subject<FoverNotificationModel>();

    private notify(_status: FoverNotificationStatusEnum, _title: string, _message: string[], _extraInfo?: string, _traceId?: string): void
    {
        this.notifier.next({
            status: _status,
            title: _title,
            message: _message,
            extraInfo: _extraInfo
        });
    }

    public success(_message: string[], _title: string = 'Sucesso', _extraInfo?: string, _traceId?: string): void
    {
        this.notify(FoverNotificationStatusEnum.success, _title, _message, _extraInfo, _traceId);
    }

    public danger(_message: string[], _title: string = 'Erro', _extraInfo?: string, _traceId?: string): void
    {
        this.notify(FoverNotificationStatusEnum.error, _title, _message, _extraInfo, _traceId);
    }

    public info(_message: string[], _title: string = 'Informação', _extraInfo?: string, _traceId?: string): void
    {
        this.notify(FoverNotificationStatusEnum.info, _title, _message, _extraInfo, _traceId);
    }
    
    public warning(_message: string[], _title: string = 'Atenção', _extraInfo?: string, _traceId?: string): void
    {
        this.notify(FoverNotificationStatusEnum.warning, _title, _message, _extraInfo, _traceId);
    }
}
