import { Component } from '@angular/core';

@Component({
    selector: 'buttons',
    templateUrl: './buttons.page.html',
    styleUrls: ['./buttons.page.scss']
})
export class ButtonPage 
{
    public code: any;

    constructor() 
    {
        this.code = require('html-loader!./examples/simple.html').default;
    }
}