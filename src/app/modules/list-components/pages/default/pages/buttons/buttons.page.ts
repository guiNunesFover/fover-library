import { Component } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { FoverNotificationService } from 'projects/fover-library-lib/src/public-api';

@Component({
    selector: 'buttons',
    templateUrl: './buttons.page.html',
    styleUrls: ['./buttons.page.scss']
})
export class ButtonPage 
{
    public codeDefault: any;
    public showCodeDefault: boolean;
    public codeTypes: any;
    public showCodeTypes: boolean;

    constructor(
        private _foverNotificationService: FoverNotificationService,
        private _clipboardService: ClipboardService,
    ) {
        this.codeDefault = require('html-loader!./examples/default.html').default;
        this.codeTypes = require('html-loader!./examples/types.html').default;
    }

    public copyCodeDefault(): void
    {
        this._clipboardService.copy(this.codeDefault);
        this.messageCopy();
    }
    
    public copyCodeTypes(): void
    {
        this._clipboardService.copy(this.codeTypes);
        this.messageCopy();
    }

    private messageCopy(): void
    {
        this._foverNotificationService.success(["O conteúdo foi copiado com sucesso."]);
    }
}