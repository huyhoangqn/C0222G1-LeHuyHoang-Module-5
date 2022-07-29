import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Ticket} from '../model/ticket';
import {Provider} from '../model/provider';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  // private API_JSON_SERVER = 'http://localhost:3000';
  private API_JSON_SERVER = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {
  }

  fillAll(page: number): Observable<Ticket[]> {
    return this.httpClient.get<Ticket[]>(this.API_JSON_SERVER + `/ticket/show?page=${page}`);
  }

  fillAllProvider(): Observable<Provider[]> {
    return this.httpClient.get<Provider[]>(this.API_JSON_SERVER + '/provider/show');
  }

  createTicket(ticket: Ticket) {
    return this.httpClient.post(this.API_JSON_SERVER + '/ticket/save-create', ticket);
  }

  findById(id: number): Observable<Ticket> {
    return this.httpClient.get<Ticket>(this.API_JSON_SERVER + '/ticket/edit/' + id);
  }

  save(ticket: Ticket): Observable<void> {
    return this.httpClient.patch<void>(this.API_JSON_SERVER + '/ticket/save-edit', ticket);
  }

  delete(id: number) {
    return this.httpClient.delete(this.API_JSON_SERVER + '/ticket/delete/' + id);
  }
}
