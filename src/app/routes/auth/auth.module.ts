import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignComponent } from '../../components/sign/sign.component';
import { SignupComponent } from '../../components/signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [SignComponent,SignupComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
