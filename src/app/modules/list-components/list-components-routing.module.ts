import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponentsDefaultPage } from './pages/default/list-components-default.page';
import { AlertPage } from './pages/default/pages/alerts/alerts.page';
import { ButtonPage } from './pages/default/pages/buttons/buttons.page';
import { InputPage } from './pages/default/pages/inputs/input.page';
import { LoadingPage } from './pages/default/pages/loadings/loading.page';
import { NotificationPage } from './pages/default/pages/notifications/notifications.page';
import { IconPage } from './pages/default/pages/_icons/icons.page';

const routes: Routes = [
    { 
        path: "", 
        component: ListComponentsDefaultPage,
        children: [
            { path: "", redirectTo: "buttons", pathMatch: "full" },
            { path: "icons", component: IconPage, },
            { path: "buttons", component: ButtonPage, },
            { path: "inputs", component: InputPage, },
            { path: "alerts", component: AlertPage, },
            { path: "notifications", component: NotificationPage, },
            { path: "loadings", component: LoadingPage, },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListComponentsRoutingModule { }
