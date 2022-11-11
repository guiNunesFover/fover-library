import { NgModule } from '@angular/core';
import { FoverButtonModule } from './button/fover-button.module';
import { FoverInputModule } from './input/fover-input.module';

@NgModule({
    exports: [
        FoverButtonModule,
        FoverInputModule,
    ],
})
export class FoverComponentesModule {}