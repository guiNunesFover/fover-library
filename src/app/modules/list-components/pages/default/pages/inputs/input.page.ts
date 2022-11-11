import { Component } from '@angular/core';

@Component({
    selector: 'fover-input-page',
    templateUrl: './input.page.html',
    styleUrls: ['./input.page.scss']
})
export class InputPage 
{
    public code: any;

    constructor() 
    {
        this.code = require('html-loader!./examples/simple.html').default;
    }
}