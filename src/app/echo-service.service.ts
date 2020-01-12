import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/Rx";
import { Items } from '../model/Items';

@Injectable()
export class EchoService {
  
  private _itemsURL = "https://api.github.com/search/repositories?q=created:%3E2019-12-01&sort=stars&order=desc";


    constructor(private httpClient: HttpClient) {}

    public getItems(index): Observable<Items[]> {
    var url = this._itemsURL +"&page="+ index ;
        return this.httpClient.get(url)
             .map((Response) => {
                 return <Items[]>Response["items"];

             })
             
    }
 
}