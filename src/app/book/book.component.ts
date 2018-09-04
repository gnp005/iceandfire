import { Component, OnInit } from '@angular/core';

import { InfoService } from '../info.service';
import { ActivatedRoute, Router } from '@angular/router';

import {Location} from '@angular/common';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  public currentBook;
  public allBooks;

  constructor(private location:Location,private _route: ActivatedRoute, private router: Router, public info: InfoService) { }

  ngOnInit() {
    // getting book name from the route
    let bookName = this._route.snapshot.paramMap.get('name');
    console.log(bookName);
    this.info.getSingleBookInformation(bookName).subscribe(
      data => {
        console.log(data);
        this.currentBook = data[0];
        console.log(this.currentBook);

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
