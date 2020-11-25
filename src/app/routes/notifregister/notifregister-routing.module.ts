import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotifregisterComponent } from '../../components/notifregister/notifregister.component';

const routes: Routes = [
  {path:'', component:NotifregisterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotifregisterRoutingModule { }
