import { Component } from '@angular/core';
import html from "./teste.html"; 

@Component({
    selector: 'buttons',
    templateUrl: './buttons.page.html',
    styleUrls: ['./buttons.page.scss']
})
export class ButtonPage 
{
    public code: string = "<fover-button>primary</fover-button>\n\
<fover-button [type]='transparent'>transparent</fover-button>";

    public teste: string = html;
}