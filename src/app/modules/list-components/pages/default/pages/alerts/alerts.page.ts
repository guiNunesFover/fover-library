import { Component } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
    selector: 'alerts',
    templateUrl: './alerts.page.html',
    styleUrls: ['./alerts.page.scss']
})
export class AlertPage 
{
    public codeDefault: string;
    public showCodeDefault: boolean;

    constructor(private _clipboardService: ClipboardService)
    {
        this.codeDefault = require('html-loader!./examples/default.html').default;
    }

    public copyCodeDefault(): void
    {
        this._clipboardService.copy(this.codeDefault);
    }
}
