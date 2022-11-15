import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'fover-input-page',
    templateUrl: './input.page.html',
    styleUrls: ['./input.page.scss']
})
export class InputPage implements OnInit
{
    public formGroup: FormGroup;
    public codeSimple: string;
    public codeWithLabel: string;
    public codeIconRight: string;

    constructor(private _formBuilder: FormBuilder) 
    {
        this.codeSimple = require('html-loader!./examples/simple.html').default;
        this.codeWithLabel = require('html-loader!./examples/with-label.html').default;
        this.codeIconRight = require('html-loader!./examples/icon-right.html').default;
    }

    ngOnInit(): void 
    {
        this.buildForm();
    }

    private buildForm(): void
    {
        this.formGroup = this._formBuilder.group({
            email: new FormControl(),
        });
    }
}