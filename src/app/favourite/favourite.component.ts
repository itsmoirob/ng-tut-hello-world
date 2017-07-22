import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  isFavourite: boolean = false;
  titleText: string;

  onClick() {
    this.isFavourite = !this.isFavourite;
  }

  constructor() { }

  ngOnInit() {
  }

}
