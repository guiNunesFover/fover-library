import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoverButtonComponent } from './fover-button.component';

@NgModule({
    declarations: [
        FoverButtonComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        FoverButtonComponent,
    ],
})
export class FoverButtonModule {}