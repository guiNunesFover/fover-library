import { Component } from '@angular/core';

@Component({
    selector: 'alert',
    templateUrl: './alert.page.html',
    styleUrls: ['./alert.page.scss']
})
export class AlertPage 
{
    public codeDefault: string;
    public showCodeDefault: boolean;

    constructor() 
    {
        this.codeDefault = require('html-loader!./examples/default.html').default;
    }
}
