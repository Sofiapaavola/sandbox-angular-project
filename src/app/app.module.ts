import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchSectionComponent } from './components/search-section/search-section.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NotFoundComponent,
    HeaderComponent,
    SearchSectionComponent,
    DashboardComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FontAwesomeModule,
    NgbModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
