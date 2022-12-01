import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClipboardService } from 'ngx-clipboard';
import { FoverNotificationService } from 'projects/fover-library-lib/src/public-api';

@Component({
    selector: 'fover-input-page',
    templateUrl: './input.page.html',
    styleUrls: ['./input.page.scss']
})
export class InputPage implements OnInit
{
    public formGroup: FormGroup;
    public codeDefault: string;
    public showCodeDefault: boolean;

    constructor(
        private _formBuilder: FormBuilder,
        private _foverNotificationService: FoverNotificationService,
        private _clipboardService: ClipboardService,
    ) {
        this.codeDefault = require('html-loader!./examples/default.html').default;
    }

    ngOnInit(): void 
    {
        this.buildForm();
    }

    private buildForm(): void
    {
        this.formGroup = this._formBuilder.group({
            email: new FormControl("", [ Validators.email ]),
        });
    }

    public copyCodeDefault(): void
    {
        this._clipboardService.copy(this.codeDefault);
        this._foverNotificationService.success(["O conteúdo foi copiado com sucesso."]);
    }
}