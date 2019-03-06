import { Component, OnInit } from '@angular/core';

import { ALBUMS, Album } from '../mock-albums';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  // variable qui public 
  albums : Album[] = ALBUMS;

  constructor() { }

  ngOnInit() {
  }

}
