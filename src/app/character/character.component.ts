import { Component, OnInit } from '@angular/core';

import { InfoService } from '../info.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  public currentCharacter;

  constructor(private info: InfoService, private _route: ActivatedRoute, router: Router) { }

  ngOnInit() {
  }

}
