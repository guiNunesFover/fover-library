import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoverAlertComponent } from './alert.component';

@NgModule({
    declarations: [
        FoverAlertComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        FoverAlertComponent,
    ],
})
export class FoverAlertModule {}