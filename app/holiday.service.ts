import { Injectable } from '@angular/core';
import { Observable, of  } from 'rxjs';
import { Holiday } from './Interface';
import { HOLIDAY } from './mock-holidays';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {

holiday = HOLIDAY

addHoliday(holiday: Holiday): Observable<Holiday> {
  return this.http.post<Holiday>(this.holidayUrl, holiday, this.httpOptions).pipe(
    tap((newHoliday: Holiday)=> this.log(`added holiday for w/ id=${newHoliday.employee}`) ),
    catchError(this.handleError<Holiday>('addHoliday'))
  );
}

  constructor(
    private http: HttpClient
) { }

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

private holidayUrl = 'api/holiday';  // URL 
  getHoliday(): Observable<Holiday[]> {    
    return this.http.get<Holiday[]>(this.holidayUrl)
  }
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
  
  }
}

