import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { SingupComponent } from './pages/singup/singup.component';
import { DistrictComponent } from './pages/district/district.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { FooterComponent } from './utils/footer/footer.component';
import { SigledistComponent } from './pages/sigledist/sigledist.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactusComponent,
    SingupComponent,
    DistrictComponent,
    NavbarComponent,
    FooterComponent,
    SigledistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
