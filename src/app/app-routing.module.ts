import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { JuegosComponent } from './juegos/juegos.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [

  { path: '', component:LoginComponent },
  { path: 'home', component:HomeComponent ,
  children: 
    [ { path: 'quien-soy', component:QuienSoyComponent},
      { path: 'juegos', component:JuegosComponent} ] },
  { path: 'menu', component:MenuComponent},
  { path: 'juegos', component:JuegosComponent },
  { path: 'quien-soy', component:QuienSoyComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
