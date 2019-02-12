import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from "./article-list/article-list.component";
import { DocumentListComponent } from "./document-list/document-list.component";
import { PageNotFoundComponent } from "./page-not-found.component";
import { TestFormComponent } from "./test-form/test-form.component"

const routes: Routes = [
  { path: 'articles', component: ArticleListComponent },
  { path: 'documents', component: DocumentListComponent },
  { path: 'test-form', component: TestFormComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ArticleListComponent, DocumentListComponent, TestFormComponent, PageNotFoundComponent]
