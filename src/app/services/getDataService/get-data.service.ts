import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../../interfaces/data.interface';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  constructor(private http: HttpClient) { }


  getDataInformation(): Observable<Data[]>{
    return this.http.get<Data[]>('../../../assets/data/data.json', {headers: this.headers});
  }
}
