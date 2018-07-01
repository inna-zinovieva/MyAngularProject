import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TripsComponent } from './trips/trips.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';
import {ScrollToModule} from 'ng2-scroll-to';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TripsComponent,
    GalleryComponent,
    BlogComponent

  ],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot(),
    RouterModule.forRoot([
      {path: 'main', component: MainComponent},
      {path: 'trips', component: TripsComponent},
      {path: 'gallery', component: GalleryComponent},
      {path: 'academy', component: BlogComponent},
      {path: '', redirectTo: 'main', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
