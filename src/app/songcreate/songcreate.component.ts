import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-songcreate',
  templateUrl: './songcreate.component.html',
  styleUrls: ['./songcreate.component.css']
})
export class SongcreateComponent implements OnInit {
  title = "";
  artist_id = "";
  year = "";
  runtime = "";
  
  appForm = new FormGroup({
    title: new FormControl(""),
    artist_id: new FormControl(""),
    year: new FormControl(""),
    runtime: new FormControl("")
  });

  onSubmit(data: Partial<{ title: string | null, artist_id: string | null, year: string | null, runtime: string | null }>) {
    this.title = data.title!;
    this.artist_id = data.artist_id!;
    this.year = data.year!;
    this.runtime = data.runtime!;

    console.log("data", data);
  }

  constructor() { }

  ngOnInit(): void {}


}
