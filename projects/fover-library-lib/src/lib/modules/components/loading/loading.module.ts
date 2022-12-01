import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoverLoadingComponent } from './loading.component';

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