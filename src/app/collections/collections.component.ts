import { Component, OnInit } from '@angular/core';
import { Collection } from '../models/collections.model'

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  constructor() { }

  collections: Collection[] = [];

  async ngOnInit(): Promise<any> {
    this.fetchCollections();
  }

  async fetchCollections(): Promise<any> {
    const res = await fetch('http://localhost:3003/collections');
    const data = await res.json();
    console.log(data);

    this.collections = data;
  }

  async onDelete(collectionId: number): Promise<any> {
    console.log(collectionId);
    const url = `http://localhost:3003/collections/${collectionId}`;
    console.log(url);
    const res = await fetch(url, {
        method: "DELETE", 
      })
      const data = await res.json();
      console.log(data);

      this.fetchCollections();
    }
  }