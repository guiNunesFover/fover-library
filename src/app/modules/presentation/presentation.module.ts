import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationDefaultPage } from './pages/default/presentation-default.page';
import { FoverComponentsModule } from 'projects/fover-library-lib/src/lib/modules/components/fover-componentes.module';
import { ListComponentsRoutingModule } from './presentation-routing.module';

@NgModule({
    declarations: [
        PresentationDefaultPage,
    ],
    imports: [
        CommonModule,
        FoverComponentsModule,
        ListComponentsRoutingModule,
    ],
    exports: [
        PresentationDefaultPage,
    ],
})
export class PresentationModule {}