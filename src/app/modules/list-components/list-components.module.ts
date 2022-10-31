import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponentsDefaultPage } from './pages/default/list-components-default.page';
import { ListComponentsRoutingModule } from './list-components-routing.module';
import { MenuLateralComponent } from './pages/default/components/menu-lateral/menu-lateral.component';
import { ButtonPage } from './pages/default/pages/buttons/buttons.page';
import { FoverComponentesModule } from 'fover-library-lib';

@NgModule({
    declarations: [
        ListComponentsDefaultPage,
        MenuLateralComponent,
        ButtonPage,
    ],
    imports: [
        CommonModule,
        ListComponentsRoutingModule,
        FoverComponentesModule,
    ],
    exports: [
        ListComponentsDefaultPage
    ],
})
export class ListComponentsModule {}