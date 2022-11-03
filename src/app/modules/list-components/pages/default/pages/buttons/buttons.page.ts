import { Component } from '@angular/core';

@Component({
    selector: 'buttons',
    templateUrl: './buttons.page.html',
    styleUrls: ['./buttons.page.scss']
})
export class ButtonPage 
{
    public html: string = "<fover-button [type]='transparent'>transparent</fover-button>";
}