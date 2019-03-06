import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-song';
  subTitle = "sous titre de l'application";
  singers: string[] = ['Bob Dylan', 'Al jareau', 'Elvis Presley', 'Michael Jackson'];
  albums: string[] = ["Off the wall", "Bad"];
  count : number = 0;

  constructor() {
    // Définir un tableau d'album
    this.albums.push("Thriller");
    this.albums.push("Dangerous");

    console.log(this.albums);
  }

  counter(sens : number){
    //this.count = this.count + sens ;
    this.count += sens ;

  }
}