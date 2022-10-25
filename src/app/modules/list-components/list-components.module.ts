import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponentsDefaultPage } from './pages/default/list-components-default.page';
import { ListComponentsRoutingModule } from './list-components-routing.module';

@NgModule({
    declarations: [
        ListComponentsDefaultPage,
    ],
    imports: [
        CommonModule,
        ListComponentsRoutingModule,
    ],
    exports: [
        ListComponentsDefaultPage
    ],
})
export class ListComponentsModule {}