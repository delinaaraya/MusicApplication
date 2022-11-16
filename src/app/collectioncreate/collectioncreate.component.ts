import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Song } from '../models/songs.model';

@Component({
  selector: 'app-collectioncreate',
  templateUrl: './collectioncreate.component.html',
  styleUrls: ['./collectioncreate.component.css']
})
export class CollectioncreateComponent implements OnInit {
  
  constructor() { }
  
  songs: Song[] = [];
  
    title = "";
    song_id = "";
    
    appForm = new FormGroup({
      title: new FormControl(""),
      song_id: new FormControl("")
    });
  

    onSubmit(data: Partial<{ title: string | null, song_id: string | null }>) {
      console.log("data", data);

      this.title = data.title!;
      this.song_id = data.song_id!;
      this.postCollection()

      // {
      //   "title": "metal",
      //   "song_id": 1
      // }

    }
  
    async postCollection(): Promise<any> {
      const data = {
        title: this.title,
        song_id: parseInt(this.song_id)
      }
      const res = await fetch('http://localhost:3003/collections', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }    

      async ngOnInit(): Promise<any> {
        const res = await fetch('http://localhost:3003/songs');
        const data = await res.json();
        console.log(data);
    
        this.songs = data;
      }
  }
