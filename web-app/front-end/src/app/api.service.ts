import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';

const httpOptionsJson = {
  headers: new HttpHeaders({
    'Content-Type': 'text/plain',
    'Accept': 'text/plain'
  }),
};

const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' });

const baseURL = `http://localhost:8081`;
const queryAllRecordsURL = `/queryAllRecords`;
const createRecordURL = `/createRecord`;


@Injectable()
export class ApiService {

  public records$: Subject<Array<object>> = new BehaviorSubject<Array<object>>([]);

  constructor(private http: HttpClient) {
  }

  createRecord(NID: string, BType: string, PFile: string, hospital: string) {
    return this.http.post(baseURL + createRecordURL, ({
      'NID': NID,
      'BType': BType,
      'PFile': PFile,
      'hospital': hospital
    }), {headers}).toPromise().then((result) => { this.queryAllRecords(); });

  }

 

  queryAllRecords() {
    return this.http.get<Array<any>>(baseURL + queryAllRecordsURL, httpOptionsJson).subscribe((response) => {
      this.records$.next(response);
    });
  }
}
