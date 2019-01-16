import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';

const routes: Routes = [

  {path:'view',component:ViewComponent},

  { path: '', redirectTo: 'view', pathMatch: 'full' },

  { path: '*', component:ViewComponent },
  { path: '**', component:ViewComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
