import { Component } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
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

    constructor(
        private _foverNotificationService: FoverNotificationService,
        private _clipboardService: ClipboardService,
    ) {
        this.codeDefault = require('html-loader!./examples/default.ts').default;
    }

    public emitNotification(): void
    {
        this._foverNotificationService.success(["Essa é uma notificação de teste"]);
    }

    public copyCodeDefault(): void 
    {
        this._clipboardService.copy(this.codeDefault);
        this._foverNotificationService.success(["O conteúdo foi copiado com sucesso."]);
    }
}