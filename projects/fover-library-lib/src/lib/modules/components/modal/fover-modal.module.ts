import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoverModalComponent } from './fover-modal.component';

@NgModule({
    declarations: [
        FoverModalComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        FoverModalComponent,
    ]
})
export class FoverModalModule {}