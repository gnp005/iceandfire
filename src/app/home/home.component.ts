import { Component, OnInit } from '@angular/core';

import { InfoService } from '../info.service';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allData;
  public allDataKeys;

  constructor(public homeinfo: HomeService) {
    console.log('home constructor is called.');

  }

  ngOnInit() {
    this.allData = this.homeinfo.getAllData().subscribe(
      data => {

        console.log(data);
        this.allData = data;
        this.allDataKeys = Object.keys(this.allData);

      },
      error => {
        console.log(error.errorMessage);

      }
    );
  }

}
