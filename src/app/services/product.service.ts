import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  private getDataProduct(response){
    return response.data
  }



  private getDataProductId(response) {
    return response.data
  }


  getdata(){
    return this.http.get<any[]>('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=10');
  }

  public getGame(): Observable<any[]>{
    return this.http.get<any[]>('https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=10').pipe(map(this.getDataProduct))
  }
  //
  // public getProductfake(): Observable<Product[]>{
  //   return this.http.get<Product[]>(environment.urlAddress + 'fake/page').pipe(map(this.getDataProduct))
  // }
  //
  //
  //
  // public getProductId(_id:string): Observable<Product[]>{
  //   return this.http.get<Product[]>(environment.urlAddress + 'product/' +_id).pipe(map(this.getDataProductId))
  // }
  //
  // getall(){
  //   return this.http.get<any[]>(environment.urlAddress + 'fake/page')
  // }
  // public getTodoId(_id:string): Observable<Todo[]>{
  //   return this.http.get<Todo[]>(environment.baseUrl + 'newtodos/' +_id).pipe(map(this.getDataTodoid))
  // }


}
