import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Games } from './pages/games/games';

const routes: Routes = [{ path: '', component: Games },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
