import { Component, OnInit } from '@angular/core';

import { InfoService } from '../info.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  public allBooks;

  constructor(private info: InfoService) { }

  ngOnInit() {
    this.allBooks = this.info.getAllBooks().subscribe(
      data => {
        console.log(data);
        this.allBooks = data;

      },
      error => {
        console.log(error.errorMessage);

      }
    );
  }

}
