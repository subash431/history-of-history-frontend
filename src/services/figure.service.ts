import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Figure } from '../modles/figure.modle';

@Injectable({
  providedIn: 'root',
})
export class FigureService {
  private apiUrl = 'http://localhost:3000/figures';

  constructor(private http: HttpClient) {}

  getFigures(): Observable<Figure[]> {
    return this.http.get<Figure[]>(this.apiUrl);
  }

  getFigureById(id: string): Observable<Figure> {
    return this.http.get<Figure>(`${this.apiUrl}/${id}`);
  }
}
