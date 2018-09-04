import { Component, OnInit } from '@angular/core';

import { InfoService } from '../info.service';
import { ActivatedRoute, Router } from '@angular/router';

import {Location} from '@angular/common';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css'],
})
export class HouseComponent implements OnInit {

  public currentHouse;

  constructor(private info: InfoService, private _route: ActivatedRoute, private router: Router,private location:Location) { }

  ngOnInit() {
    let houseName = this._route.snapshot.paramMap.get('name');
    console.log(houseName);
    this.info.getSingleHouseInformation(houseName).subscribe(
      data => {
        console.log(data);
        this.currentHouse = data[0];
      },
      error => {
        console.log(error.errorMessage);

      }
    );
  }
  goBack(): any{
    this.location.back();
  }

}
