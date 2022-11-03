import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoverEditorComponent } from './fover-editor.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        FoverEditorComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        MonacoEditorModule.forRoot(),
    ],
    exports: [
        FoverEditorComponent,
    ],
})
export class FoverEditorModule {}