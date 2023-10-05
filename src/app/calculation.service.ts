import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Calculation } from './calculation';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {

  private baseURL = "http://localhost:8080/api/v1/calculations";

  constructor(private httpClient: HttpClient) { }

  getCalculationsList(): Observable<Array<Calculation>>{
    return this.httpClient.get <Array<Calculation>>(`${this.baseURL}`);
  }

  createCalculation(calculation: Calculation): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, calculation);
  }

  getCalculationById(id: number): Observable<Calculation>{
    return this.httpClient.get<Calculation>(`${this.baseURL}/${id}`);
  }

  updateCalculation(id: number, calculation: Calculation): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, calculation);
  }

  deleteCalculation(id: number): Observable<Object>{
return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
