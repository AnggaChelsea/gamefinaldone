import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotifregisterComponent } from '../../components/notifregister/notifregister.component';

import { NotifregisterRoutingModule } from './notifregister-routing.module';


@NgModule({
  declarations: [NotifregisterComponent],
  imports: [
    CommonModule,
    NotifregisterRoutingModule
  ]
})
export class NotifregisterModule { }
