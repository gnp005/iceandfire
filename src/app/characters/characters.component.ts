import { Component, OnInit } from '@angular/core';

import { InfoService } from '../info.service';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  public allCharacters;

  constructor(private info: InfoService) { }

  ngOnInit() {
    this.allCharacters = this.info.getAllCharacters().subscribe(
      data => {
        console.log(data);
        this.allCharacters = data;
        console.log(this.allCharacters);
      },
      error => {
        console.log(error.errorMessage);

      }
    );
  }

}
