import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../customer/customer';

const API_URL = `http://localhost:8080/customer`;

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(API_URL);
  }

  createCustomer(customer: Customer) {
    return this.httpClient.post(API_URL + '/save', customer);
  }

  delete(customerId: string): Observable<void> {
    return this.httpClient.delete<void>(API_URL + '/delete/' + customerId);
  }
}
