import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", pathMatch: "full", loadChildren: () => import("../presentation/presentation.module").then(x => x.PresentationModule) },
  { path: "list-components", loadChildren: () => import("../list-components/list-components.module").then(x => x.ListComponentsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
