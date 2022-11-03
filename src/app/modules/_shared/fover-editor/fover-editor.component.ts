import { Component, Input } from '@angular/core';

@Component({
    selector: 'fover-editor',
    templateUrl: './fover-editor.component.html',
    styleUrls: ['./fover-editor.component.scss']
})
export class FoverEditorComponent 
{
    @Input() editorOptions = {
        theme: 'vs-dark', 
        language: 'html',
    };
    @Input() code: string = "Digite o código que vai aparecer na tela";
}