import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-query-all-records',
  templateUrl: './query-all-records.component.html',
  styleUrls: ['./query-all-records.component.scss']
})
export class QueryAllRecordsComponent implements OnInit {

  private records: Array<object>;
  response;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.records$.subscribe((recordsArray) => {
      this.records = recordsArray;
    });
    this.apiService.queryAllRecords();
  }
}
