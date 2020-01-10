import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrestashopService {
  // BACK END URL FORMAT
 // http://192.168.64.3/api/categories?ws_key=W3Q81G1ZAAIJ3DFNCXWWZN3F4J4SW8CK&output_format=JSON&display=full
  url = "http://192.168.64.3/api/";
  key = "W3Q81G1ZAAIJ3DFNCXWWZN3F4J4SW8CK";
  output = "output_format=JSON&display=full";
  constructor( private http:  HttpClient) { }

  builUrl() {
    return this.url + 'categories?ws_key=' + this.key + '&' + this.output;
  }

  public getCategories() {
    return this.http.get(this.builUrl());
  }
}
