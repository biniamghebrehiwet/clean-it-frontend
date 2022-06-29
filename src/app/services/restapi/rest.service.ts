import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OrderRestModel} from "../../models/order/order.model";

@Injectable()
export class RestService {

  /* Attributes */
  baseUrl: string = "http://localhost:8080/api";

  /* Default Constructor */
  constructor(
    private httpClient: HttpClient
  ) { }

  /* Sends a http request to the backend in order to read all orders */
  public getAllOrders(): Observable<any> {
    const url = this.baseUrl + "/orders";
    return this.httpClient.get<Array<OrderRestModel>>(url);
  }

  /* Sends a http request to search for orders */
  public searchAnOrder(searchValue: any): Observable<any> {
    const url = this.baseUrl + "/searchOrder";
    const headers = { 'content-type': 'application/json'}
    return this.httpClient.post<Array<OrderRestModel>>(url, searchValue, {headers: headers});
  }

}
