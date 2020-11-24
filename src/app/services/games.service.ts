import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Game } from '../models/games';


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


public getGame(): Observable<Game[]>{
  return this.http.get<Game[]>('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=5').pipe(map(this.getDataGame))
}
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

}
