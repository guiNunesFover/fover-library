import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponentsDefaultPage } from './pages/default/list-components-default.page';

const routes: Routes = [
    { path: "", component: ListComponentsDefaultPage }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListComponentsRoutingModule { }
