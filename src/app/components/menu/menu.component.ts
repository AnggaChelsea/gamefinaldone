import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GamesService } from '../../services/games.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  constructor(private gamesService:GamesService, private http:HttpClient) { }
  product$:Observable<any[]>;
  // li:any;
  // lis=[];
  ngOnInit(){

    this.product$ = this.gamesService.getGame();
    console.log(this.product$)
    // this.http.get('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=5').subscribe(
    //   response => {
    //     console.log(response)
    //     this.li=Response;
    //     this.lis=this.li.list
    //   }
    // )
  }

}
