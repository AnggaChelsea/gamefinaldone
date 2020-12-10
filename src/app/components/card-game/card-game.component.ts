import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-card-game',
  templateUrl: './card-game.component.html',
  styleUrls: ['./card-game.component.css']
})
export class CardGameComponent implements OnInit {
  jokes:Object = [];
  constructor(private gamesService:GamesService, private http:HttpClient) {
    this.jokes = [
      {
        image:'https://media.hitekno.com/thumbs/2019/08/03/24548-fifa-20/730x480-img-24548-fifa-20.jpg',
        namagame:'Fifa',
        deskription: "What did the cheese say when it looked in the mirror?",
        type: "Hello-Me (Halloumi)",
        join:'board'
      },
      {
        image:'https://media.hitekno.com/thumbs/2019/08/03/24548-fifa-20/730x480-img-24548-fifa-20.jpg',
        namagame:'Fifa',
        deskription: "What did the cheese say when it looked in the mirror?",
        type: "Hello-Me (Halloumi)",
        join:'board'
      },
      {
        image:'https://media.hitekno.com/thumbs/2019/08/03/24548-fifa-20/730x480-img-24548-fifa-20.jpg',
        namagame:'Fifa',
        deskription: "What did the cheese say when it looked in the mirror?",
        type: "Hello-Me (Halloumi)",
        join:'board'
      },
      {
        image:'https://media.hitekno.com/thumbs/2019/08/03/24548-fifa-20/730x480-img-24548-fifa-20.jpg',
        namagame:'Fifa',
        deskription: "What did the cheese say when it looked in the mirror?",
        type: "Hello-Me (Halloumi)",
        join:'board'
      },
      {
        image:'https://media.hitekno.com/thumbs/2019/08/03/24548-fifa-20/730x480-img-24548-fifa-20.jpg',
        namagame:'Fifa',
        deskription: "What did the cheese say when it looked in the mirror?",
        type: "Hello-Me (Halloumi)",
        join:'board'
      },
      {
        image:'https://media.hitekno.com/thumbs/2019/08/03/24548-fifa-20/730x480-img-24548-fifa-20.jpg',
        namagame:'Fifa',
        deskription: "What did the cheese say when it looked in the mirror?",
        type: "Hello-Me (Halloumi)",
        join:'board'
      },
      {
        image:'https://media.hitekno.com/thumbs/2019/08/03/24548-fifa-20/730x480-img-24548-fifa-20.jpg',
        namagame:'Fifa',
        deskription: "What did the cheese say when it looked in the mirror?",
        type: "Hello-Me (Halloumi)",
        join:'board'
      },
      {
        image:'https://media.hitekno.com/thumbs/2019/08/03/24548-fifa-20/730x480-img-24548-fifa-20.jpg',
        namagame:'Fifa',
        deskription: "What did the cheese say when it looked in the mirror?",
        type: "Hello-Me (Halloumi)",
        join:'board'
      },

    ];
  }

  ngOnInit(): void {
  }

}
