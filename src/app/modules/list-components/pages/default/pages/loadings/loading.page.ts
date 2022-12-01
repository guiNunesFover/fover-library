import { Component } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { FoverNotificationService } from 'projects/fover-library-lib/src/public-api';

@Component({
    selector: 'loading',
    templateUrl: './loading.page.html',
    styleUrls: ['./loading.page.scss']
})
export class LoadingPage 
{
    public codeDefault: string;
    public showCodeDefault: boolean;

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