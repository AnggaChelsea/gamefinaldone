import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypegamesComponent } from './components/typegames/typegames.component';
import { DataTablesModule } from 'angular-datatables';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// import { AngularFireModule } from '@angular/fire';
import { ProductService } from './services/product.service';
import { UserService } from './services/user.service';
import { AuthGuard } from './services/auth/auth.guard';
import { AuthService } from './services/auth/auth.service';
// For MDB Angular Free
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { MenuComponent } from './components/menu/menu.component';
import { ListplayerComponent } from './components/listplayer/listplayer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PanitiaComponent } from './components/panitia/panitia.component';
import { BestplayerComponent } from './components/bestplayer/bestplayer.component';
import { ContactjoinComponent } from './components/contactjoin/contactjoin.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { OpengameComponent } from './components/opengame/opengame.component';
import { DetailgameComponent } from './components/detailgame/detailgame.component';
import { IfRolesDirective } from './if-roles.directive';
import { SoccerComponent } from './components/games/soccer/soccer.component';
import { ThreeimagebannerComponent } from './components/threeimagebanner/threeimagebanner.component';
import { CardGameComponent } from './components/card-game/card-game.component';
import { ChatmeComponent } from './components/chatme/chatme.component';
import { ChatComponent } from './components/chat/chat.component';
import { PagesearchComponent } from './components/pagesearch/pagesearch.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,
    MenuComponent,
    ListplayerComponent,
    ProfileComponent,
    PanitiaComponent,
    BestplayerComponent,
    ContactjoinComponent,
    ForgotpasswordComponent,
    OpengameComponent,
    DetailgameComponent,
    IfRolesDirective,
    TypegamesComponent,
    SoccerComponent,
    ThreeimagebannerComponent,
    CardGameComponent,
    ChatmeComponent,
    ChatComponent,
    PagesearchComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    MDBBootstrapModule,
    CarouselModule,
    WavesModule,
    ReactiveFormsModule,
    DataTablesModule,
    // AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [ProductService, AuthGuard, AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
