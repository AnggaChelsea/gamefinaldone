import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './services/auth/auth.guard';
import { AuthService } from './services/auth/auth.service';


// For MDB Angular Free
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { GamesModule } from './routes/board/games/games.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { MenuComponent } from './components/menu/menu.component';

import { ListplayerComponent } from './components/listplayer/listplayer.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PanitiaComponent } from './components/panitia/panitia.component';
import { BestplayerComponent } from './components/bestplayer/bestplayer.component';
import { ContactjoinComponent } from './components/contactjoin/contactjoin.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddgameComponent } from './components/admin/addgame/addgame.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,
    MenuComponent,
    ListplayerComponent,
    AdminComponent,
    ProfileComponent,
    PanitiaComponent,
    BestplayerComponent,
    ContactjoinComponent,
    ForgotpasswordComponent,
    SidebarComponent,
    AddgameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MDBBootstrapModule,
    GamesModule,
    CarouselModule,
    WavesModule,
    ReactiveFormsModule,
  ],
  providers: [ProductService, AuthGuard, AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
