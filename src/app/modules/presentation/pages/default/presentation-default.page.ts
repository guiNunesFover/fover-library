import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'presentation-default',
    templateUrl: './presentation-default.page.html',
    styleUrls: ['./presentation-default.page.scss']
})
export class PresentationDefaultPage 
{
    public title: string = "Comece seus projetos 3 passos à frente.";

    constructor(private _router: Router) {}

    public navigateToListComponents(): void
    {
        this._router.navigate(["list-components"]);
    }
}