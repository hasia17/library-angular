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
    path: 'searchAuthor',
    loadChildren: () =>
      import('src/app/modules/author-search/author-search.module').then(
        (m) => m.AuthorSearchModule
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
    path: 'author',
    loadChildren: () =>
      import('src/app/modules/author-detail/author-detail.module').then(
        (m) => m.AuthorDetailModule
      )
  },
  {
    path: '',
    loadChildren: () =>
      import('src/app/modules/start-menu/start-menu.module').then(
        (m) => m.StartMenuModule
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