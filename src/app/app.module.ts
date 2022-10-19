import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddflightComponent } from './addflight/addflight.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ViewflightComponent } from './viewflight/viewflight.component';
import { HttpClientModule} from '@angular/common/http';

const appRoutes:Routes=[
  {
    path:"",component:AddflightComponent
  },
  {
    path:"view",component:ViewflightComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddflightComponent,
    ViewflightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
