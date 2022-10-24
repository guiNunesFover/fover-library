import { NgModule } from '@angular/core';
import { CoreDefaultPage } from './pages/default/core-default.page';
import { BrowserModule } from '@angular/platform-browser';
import { CoreRoutingModule } from './core-routing.module';
import { MenuTopComponent } from './pages/default/components/menu-top/menu-top.component';
import { AddTitleModule, ThemeEnum, ThemeModule } from 'projects/fover-library-lib/src/public-api';

@NgModule({
    declarations: [
        CoreDefaultPage,
        MenuTopComponent,
    ],
    imports: [
        BrowserModule,
        CoreRoutingModule,
        AddTitleModule,
        ThemeModule.forRoot({
            active: ThemeEnum.light
        })
    ],
    bootstrap: [
        CoreDefaultPage,
    ]
})
export class CoreModule {}