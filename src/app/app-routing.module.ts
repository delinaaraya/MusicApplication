import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectioncreateComponent } from './collectioncreate/collectioncreate.component';
import { CollectionsComponent } from './collections/collections.component';
import { CollectionupdateComponent } from './collectionupdate/collectionupdate.component';
import { SongcreateComponent } from './songcreate/songcreate.component';
import { SongsComponent } from './songs/songs.component';

const routes: Routes = [
  { path: 'songs', component: SongsComponent},
  { path: 'song/create', component: SongcreateComponent},
  { path: 'collection/create', component: CollectioncreateComponent},
  { path: 'collections', component: CollectionsComponent},
  { path: 'collection/update/:collectionId', component: CollectionupdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
