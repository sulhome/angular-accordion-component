import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Faq} from '../types';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
  }

  getFaqs(): Observable<Faq[]> {
    return this.httpClient.get<Faq[]>(environment.faqsUrl);
  }
}
