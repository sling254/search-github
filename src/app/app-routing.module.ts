import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from '../app/components/not-found/not-found.component';
import { GithubComponent } from './components/github/github.component';

const routes: Routes = [
  {path:"", component:GithubComponent},
  {path:"**", component:NotFoundComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
