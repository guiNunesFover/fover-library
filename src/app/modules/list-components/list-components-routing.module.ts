import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponentsDefaultPage } from './pages/default/list-components-default.page';
import { ButtonPage } from './pages/default/pages/buttons/buttons.page';
import { InputPage } from './pages/default/pages/inputs/input.page';
import { IconsPage } from './pages/default/pages/_icons/icons.page';

const routes: Routes = [
    { 
        path: "", 
        component: ListComponentsDefaultPage,
        children: [
            { path: "", redirectTo: "buttons", pathMatch: "full" },
            { path: "icons", component: IconsPage, },
            { path: "buttons", component: ButtonPage, },
            { path: "inputs", component: InputPage, }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListComponentsRoutingModule { }
