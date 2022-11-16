import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongsComponent } from './songs/songs.component';
import { SongcreateComponent } from './songcreate/songcreate.component';
import { CollectioncreateComponent } from './collectioncreate/collectioncreate.component';
import { CollectionsComponent } from './collections/collections.component';
import { CollectionupdateComponent } from './collectionupdate/collectionupdate.component';

@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    SongcreateComponent,
    CollectioncreateComponent,
    CollectionsComponent,
    CollectionupdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
