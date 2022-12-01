import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoverLoadingComponent } from './fover-loading.component';

@NgModule({
    declarations: [
        FoverLoadingComponent,
    ],
    imports: [
        CommonModule
    ],
    exports: [
        FoverLoadingComponent,
    ],
})
export class FoverLoadingModule {}