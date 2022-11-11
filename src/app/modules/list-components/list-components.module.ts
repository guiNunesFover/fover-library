import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponentsDefaultPage } from './pages/default/list-components-default.page';
import { ListComponentsRoutingModule } from './list-components-routing.module';
import { MenuLateralComponent } from './pages/default/components/menu-lateral/menu-lateral.component';
import { ButtonPage } from './pages/default/pages/buttons/buttons.page';
import { FoverEditorModule } from '../_shared/fover-editor/fover-editor.module';
import { InputPage } from './pages/default/pages/inputs/input.page';
import { FoverComponentesModule } from 'projects/fover-library-lib/src/public-api';

@NgModule({
    declarations: [
        ListComponentsDefaultPage,
        MenuLateralComponent,
        ButtonPage,
        InputPage,
    ],
    imports: [
        CommonModule,
        ListComponentsRoutingModule,
        FoverComponentesModule,
        FoverEditorModule,
    ],
    exports: [
        ListComponentsDefaultPage
    ],
})
export class ListComponentsModule {}