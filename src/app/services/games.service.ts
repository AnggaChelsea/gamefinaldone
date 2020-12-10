import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { Game } from '../models/games';
//
// let jokes = [
//   {
//     image:'https://media.hitekno.com/thumbs/2019/08/03/24548-fifa-20/730x480-img-24548-fifa-20.jpg',
//     namagame:'COC',
//     deskription: "What did the cheese say when it looked in the mirror?",
//     participant:"20",
//     matchday:"20-20-2021",
//     type: "free for all",
//     id:"1",
//     join:'boardgame:'
//   },
//   {
//     image:'https://media.hitekno.com/thumbs/2019/08/03/24548-fifa-20/730x480-img-24548-fifa-20.jpg',
//     namagame:'Winning',
//     deskription: "What did the cheese say when it looked in the mirror?",
//     participant:"20",
//     matchday:"20-20-2021",
//     type: "free for all",
//       id:"2",
//     join:'boardgame'
//   },
//   {
//     image:'https://media.hitekno.com/thumbs/2019/08/03/24548-fifa-20/730x480-img-24548-fifa-20.jpg',
//     namagame:'Medal',
//     deskription: "What did the cheese say when it looked in the mirror?",
//     participant:"20",
//     matchday:"20-20-2021",
//     type: "free for all",
//       id:"3",
//     join:'boardgame'
//   },
//   {
//     image:'https://media.hitekno.com/thumbs/2019/08/03/24548-fifa-20/730x480-img-24548-fifa-20.jpg',
//     namagame:'Dota',
//     deskription: "What did the cheese say when it looked in the mirror?",
//     participant:"20",
//     matchday:"20-20-2021",
//     type: "free for all",
//     id:"4",
//     join:'boardgame'
//   },
//   {
//     image:'https://media.hitekno.com/thumbs/2019/08/03/24548-fifa-20/730x480-img-24548-fifa-20.jpg',
//     namagame:'FF',
//     deskription: "What did the cheese say when it looked in the mirror?",
//     participant:"20",
//     matchday:"20-20-2021",
//     type: "free for all",
//     id:"5",
//     join:'boardgame'
//   },
//   {
//     image:'https://media.hitekno.com/thumbs/2019/08/03/24548-fifa-20/730x480-img-24548-fifa-20.jpg',
//     namagame:'Fifa',
//     deskription: "What did the cheese say when it looked in the mirror?",
//     participant:"20",
//     matchday:"20-20-2021",
//     type: "free for all",
//       id:"6",
//     join:'boardgame'
//   },
//   {
//     image:'https://media.hitekno.com/thumbs/2019/08/03/24548-fifa-20/730x480-img-24548-fifa-20.jpg',
//     namagame:'PUBG',
//     deskription: "What did the cheese say when it looked in the mirror?",
//     participant:"20",
//     matchday:"20-20-2021",
//     type: "free for all",
//       id:"8",
//     join:'boardgame'
//   },
//   {
//     image:'https://media.hitekno.com/thumbs/2019/08/03/24548-fifa-20/730x480-img-24548-fifa-20.jpg',
//     namagame:'PPes',
//     deskription: "What did the cheese say when it looked in the mirror?",
//     participant:"20",
//     matchday:"20-20-2021",
//     type: "free for all",
//       id:"7",
//     join:'boardgame'
//   },
//
// ];


@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private http:HttpClient) { }

  private getDataGame(response){
  return response.data
}


//
// private getDataGameId(response) {
//   return response.data
// }


// public getGame(): Observable<Game[]>{
//   return this.http.get<Game[]>('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=5').pipe(map(this.getDataGame))
// }
//
// public getGamefake(): Observable<Game[]>{
//   return this.http.get<Game[]>(environment.urlAddress + 'fake/page').pipe(map(this.getDataGame))
// }
//
//
//
// public getGameId(_id:string): Observable<Game[]>{
//   return this.http.get<Game[]>(environment.urlAddress + 'product/' +_id).pipe(map(this.getDataGameId))
// }
//
// getall(){
//   return this.http.get<any[]>(environment.urlAddress + 'fake/page')
// }
// public getTodoId(_id:string): Observable<Todo[]>{
//   return this.http.get<Todo[]>(environment.baseUrl + 'newtodos/' +_id).pipe(map(this.getDataTodoid))
// }
// 
// getGameById():Observable<any>{
//
// }

}
