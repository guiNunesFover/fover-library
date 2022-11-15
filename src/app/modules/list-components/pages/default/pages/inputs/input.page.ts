import { Component } from '@angular/core';

@Component({
    selector: 'fover-input-page',
    templateUrl: './input.page.html',
    styleUrls: ['./input.page.scss']
})
export class InputPage 
{
    public codeSimple: string;
    public codeWithLabel: string;
    public codeIconRight: string;

    constructor() 
    {
        this.codeSimple = require('html-loader!./examples/simple.html').default;
        this.codeWithLabel = require('html-loader!./examples/with-label.html').default;
        this.codeIconRight = require('html-loader!./examples/icon-right.html').default;
    }
}