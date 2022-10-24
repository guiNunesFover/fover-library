import { NgModule } from '@angular/core';
import { AddTitleDirective } from './add-title.directive';

@NgModule({
    declarations: [
        AddTitleDirective,
    ],
    exports: [
        AddTitleDirective,
    ]
})
export class AddTitleModule {}