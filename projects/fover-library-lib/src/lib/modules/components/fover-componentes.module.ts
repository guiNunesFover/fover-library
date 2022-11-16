import { NgModule } from '@angular/core';
import { FoverAlertModule } from './alert';
import { FoverButtonModule } from './button/fover-button.module';
import { FoverInputModule } from './input/fover-input.module';

@NgModule({
    exports: [
        FoverButtonModule,
        FoverInputModule,
        FoverAlertModule,
    ],
})
export class FoverComponentesModule {}