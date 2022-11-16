import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Song } from '../models/songs.model';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { Collection } from '../models/collections.model';

@Component({
  selector: 'app-collectionupdate',
  templateUrl: './collectionupdate.component.html',
  styleUrls: ['./collectionupdate.component.css']
})
export class CollectionupdateComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  songs: Song[] = [];
  collection!: Collection;
  
  title = "";
  song_id = "";
  collectionId = "";

  appForm = new FormGroup({
    title: new FormControl(""),
    song_id: new FormControl("")
  });


  onSubmit(data: Partial<{ title: string | null, song_id: string | null }>) {
    console.log("data", data);
    const originaltitle = this.title
    const originalsongId = this.song_id
    this.title = data.title || originaltitle ;
    this.song_id = data.song_id || originalsongId;
    console.log("title", this.title);
    console.log("songId", this.song_id);
    this.updateCollection()

    // {
    //   "title": "metal",
    //   "song_id": 1
    // }

  }

  async updateCollection(): Promise<any> {
    const data = {
    // {
    //     "id": 3,
    //     "title": "jazz",
    //     "song_id": 1
    // }
      id: this.collection.collectionId,
      title: this.title,
      song_id: parseInt(this.song_id)
    }
    console.log("data2", data);
    const res = await fetch('http://localhost:3003/collections', {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const parsedRes = await res.json();
    console.log("parsedRes", parsedRes);

    this.fetchCollectionById();
  }    

  async fetchCollectionById(): Promise<any> {
    const res = await fetch('http://localhost:3003/collections');
    const data = await res.json();
    console.log(data);
    const collectionId = this.collectionId;
    this.collection = data.find((collection: { collectionId: any; }) => {
      if(collection.collectionId == collectionId) return true;
      return false;
    }); 
    
    console.log("collection", this.collection);
  }

  // ngOnInit(): void {
  //   this.route.paramMap.subscribe((params: ParamMap) => {
  //     this.id = +params.get('id')
  //   })

    async ngOnInit(): Promise<any> {
      this.route.paramMap.subscribe((params: ParamMap) => {
        this.collectionId = params.get('collectionId')!
      })
      console.log("collection id", this.collectionId);
      const res = await fetch('http://localhost:3003/songs');
      const data = await res.json();
      console.log(data);

      this.fetchCollectionById();

      this.songs = data;
    }
}

