import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { BoxPageComponent } from './box-page/box-page.component';
import { ButtonsPageComponent } from './buttons-page/buttons-page.component';
import { ButtonContainerComponent } from './button-container/button-container.component';
import { LogoPageComponent } from './logo-page/logo-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderPageComponent,
    GalleryPageComponent,
    FooterPageComponent,
    BoxPageComponent,
    ButtonsPageComponent,
    ButtonContainerComponent,
    LogoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
