import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDescritionComponent } from './movie-description/movie-description.component';


const routes: Routes = [
  {path: 'movie-list', component: MovieListComponent},
  {path: 'movie-description', component: MovieDescritionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
