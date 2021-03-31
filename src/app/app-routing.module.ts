import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

const routes: Routes = [
  {
    path: 'search',
    loadChildren: () =>
      import('src/app/modules/book-search/book-search.module').then(
        (m) => m.BookSearchModule
      )
  },
  {
    path: 'detail',
    loadChildren: () =>
      import('src/app/modules/book-detail/book-detail.module').then(
        (m) => m.BookDetailModule
      )
  },
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
      relativeLinkResolution: 'legacy',
      preloadingStrategy: PreloadAllModules,
    }), TranslateModule],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }