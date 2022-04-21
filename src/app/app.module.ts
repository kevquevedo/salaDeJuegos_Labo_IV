import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { JuegosComponent } from './juegos/juegos.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuienSoyComponent,
    HomeComponent,
    MenuComponent,
    JuegosComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
