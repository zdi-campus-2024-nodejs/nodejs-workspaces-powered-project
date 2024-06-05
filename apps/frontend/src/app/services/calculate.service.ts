import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {catchError, Observable, take, throwError} from "rxjs";
import {Status} from "@app/model/src/Status";

@Injectable({providedIn: 'root'})
export class CalculateService {
    constructor(private readonly http: HttpClient) {}

    getCalculate(x: number, y: number): Observable<Status> {
        return this.http.get<Status>('http://localhost:3000/calculate', {
            params: {
              x, y
            },
            withCredentials: true, // send cookies via http request
        }).pipe(
            take(1),
            catchError((err) => throwError(err))
        )
    }
}