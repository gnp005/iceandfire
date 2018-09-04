import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ROuter related imports
import { RouterModule, Routes } from '@angular/router';
import {Location} from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { InfoComponent } from './info/info.component';
import { InfoService } from './info.service';
import { HttpClientModule } from '@angular/common/http';
import { BooksComponent } from './books/books.component';
import { HousesComponent } from './houses/houses.component';
import { CharactersComponent } from './characters/characters.component';
import { HomeService } from './home.service';
import { BookComponent } from './book/book.component';
import { HouseComponent } from './house/house.component';
import { CharacterComponent } from './character/character.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    InfoComponent,
    BooksComponent,
    HousesComponent,
    CharactersComponent,
    BookComponent,
    HouseComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'about', component: AboutComponent },
      { path: 'books', component: BooksComponent },
      { path: 'book/:name', component: BookComponent },
      { path: 'characters', component: CharactersComponent },
      { path: 'characters/:aliases', component: CharacterComponent },
      { path: 'houses', component: HousesComponent },
      { path: 'houses/:name', component: HouseComponent },
      { path: 'info', component: InfoComponent }
    ])
  ],
  providers: [InfoService, HomeService,Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
