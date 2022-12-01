import { Component } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { FoverNotificationService } from 'projects/fover-library-lib/src/public-api';

@Component({
    selector: 'modal',
    templateUrl: './modal.page.html',
    styleUrls: ['./modal.page.scss']
})
export class ModalPage 
{
    public codeDefault: string;
    public showCodeDefault: boolean;
    public showModal: boolean;

    constructor(
        private _foverNotificationService: FoverNotificationService,
        private _clipboardService: ClipboardService,
    ) {
        this.codeDefault = require('html-loader!./examples/default.html').default;
    }

    public copyCodeDefault(): void 
    {
        this._clipboardService.copy(this.codeDefault);
        this._foverNotificationService.success(["O conteúdo foi copiado com sucesso."]);
    }
}