import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from '../../components/signup/signup.component';
import { SignComponent } from '../../components/sign/sign.component';

const routes: Routes = [
  {
    path:'',
    component:SignComponent,
  },
  {
    path:'signup',
    component:SignupComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
