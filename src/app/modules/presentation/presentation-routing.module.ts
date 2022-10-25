import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationDefaultPage } from './pages/default/presentation-default.page';

const routes: Routes = [
    { path: "", component: PresentationDefaultPage }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListComponentsRoutingModule { }
