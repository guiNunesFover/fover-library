import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoverNotificationAreaComponent } from './components/fover-notification-area/fover-notification-area.component';
import { FoverNotificationCardComponent } from './components/fover-notification-card/fover-notification-card.component';
import { FoverNotificationService } from './services/fover-notification.service';

@NgModule({
    declarations: [
        FoverNotificationAreaComponent,
        FoverNotificationCardComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        FoverNotificationAreaComponent,
    ],
})
export class FoverNotificationModule 
{
    public static forRoot(): ModuleWithProviders<FoverNotificationModule>
    {
        return  {
            ngModule: FoverNotificationModule,
            providers: [FoverNotificationService]
        };
    }
}