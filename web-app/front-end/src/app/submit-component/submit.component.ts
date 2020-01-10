import { Component, OnInit } from '@angular/core';

import { CreateRecordFormComponent } from './create-record-form/create-record-form.component';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss']
})
export class SubmitComponent implements OnInit {

  constructor() { }

  showCreateRecord = true;
  
  ngOnInit() {
  }




}
