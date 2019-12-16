import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuoteListComponent } from './components/quote-list/quote-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchSectionComponent } from './components/search-section/search-section.component';


const routes: Routes = [
  { path: "quotes", component: QuoteListComponent },
  { path: "dashboard", component: SearchSectionComponent },

  // { path: "movie/:id", component: SelectedMovieComponent },
  // { path: "favourites", component: FavouritesComponent },
  { path: "not-found", component: NotFoundComponent },
  { path: "", redirectTo: "/quotes", pathMatch: "full" },
  { path: "**", redirectTo: "not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
