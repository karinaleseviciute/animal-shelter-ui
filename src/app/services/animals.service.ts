import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Animal } from '../models/animal';
import { AnimalView } from '../models/animal.view';
import { AnimalViewOnly } from '../models/animal.view.only';
import { AnimalSearchParams } from '../models/animal.search.params';

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {

  private baseUrl = 'http://localhost:5296/api/Animals';
  public list: string;

  constructor(private http: HttpClient) {
    this.http = http;
   }

  // tslint:disable-next-line:ban-types
  getImage(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
  getAnimal(id: number): Observable<AnimalView> {
    return this.http.get<AnimalView>(`${this.baseUrl}/${id}`);
  }
  // tslint:disable-next-line:ban-types
  createImage(image: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, image);
  }
  filterAnimals(filterParams: AnimalSearchParams): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/filter`, filterParams);
  }
  // tslint:disable-next-line:ban-types
  updateImage(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
  deleteImage(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
  getAnimals(): Observable<AnimalView[]> {
    return this.http.get<AnimalView[]>(`${this.baseUrl}`).pipe(retry(1), catchError(this.handleError));;
  }
  getImagesByDescription(description: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/description/${description}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
  getCityList(): any {
   return this.http.get('src/assets/data.files/cityList.txt',{responseType: 'text'});
  }

  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
