import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';
import { Role  } from './models/index';



import { HomeComponent } from './components/home/home.component';
import { TeamallComponent } from './components/board/teamall/teamall.component';
import { PopulerComponent } from './components/games/populer/populer.component';
import { AdminComponent } from './components/admin/admin.component';


const routes: Routes = [
  {path:'', component:HomeComponent},

  {path:'team', component:TeamallComponent },
  {path:'populer', component:PopulerComponent},
  {
    path: 'sign',
    loadChildren:'./routes/auth/auth.module#AuthModule'
  },
  {
    path: 'pubg',
    loadChildren: () => import('./routes/board/games/games.module').then(m => m.GamesModule)
  },
  {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        data: { roles: [Role.Admin] }
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
