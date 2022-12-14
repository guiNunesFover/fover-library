import { NgModule } from '@angular/core';
import { FoverAlertModule } from './alert';
import { FoverButtonModule } from './button/fover-button.module';
import { FoverInputModule } from './input/fover-input.module';
import { FoverLoadingModule } from './loading';
import { FoverModalModule } from './modal';
import { FoverNotificationModule } from './notification';

@NgModule({
    exports: [
        FoverButtonModule,
        FoverInputModule,
        FoverAlertModule,
        FoverNotificationModule,
        FoverLoadingModule,
        FoverModalModule,
    ],
})
export class FoverComponentsModule {}