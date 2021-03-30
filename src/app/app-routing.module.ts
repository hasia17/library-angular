import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () =>
  //     import('src/app/test/test.module').then(
  //       (m) => m.TestModule
  //     )
  // },
  {
    path: 'a',
    loadChildren: () =>
      import('src/app/test/test.module').then(
        (m) => m.TestModule
      )
  },
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {
      relativeLinkResolutio