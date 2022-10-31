import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponentsDefaultPage } from './pages/default/list-components-default.page';
import { ButtonPage } from './pages/default/pages/buttons/buttons.page';

const routes: Routes = [
    { 
        path: "", 
        component: ListComponentsDefaultPage,
        children: [
            { path: "", redirectTo: "buttons", pathMatch: "full" },
            { path: "buttons", component: ButtonPage, }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListComponentsRoutingModule { }
