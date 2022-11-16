import { Component, OnInit } from '@angular/core';
import { Song } from '../models/songs.model';
//import fetch from 'node-fetch';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  constructor() { }

  songs: Song[] = [];

  async ngOnInit(): Promise<any> {
    const res = await fetch('http://localhost:3003/songs');
    const data = await res.json();
    console.log(data);

    this.songs = data;
  }
}
