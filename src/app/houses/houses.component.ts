import { Component, OnInit } from '@angular/core';

import { InfoService } from '../info.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  public allHouses;

  constructor(private info: InfoService) { }

  ngOnInit() {
    this.allHouses = this.info.getAllHouses().subscribe(
      data => {
        console.log(data);
        this.allHouses = data;

      },
      error => {
        console.log(error.errorMessage);

      }
    );

  }

}
