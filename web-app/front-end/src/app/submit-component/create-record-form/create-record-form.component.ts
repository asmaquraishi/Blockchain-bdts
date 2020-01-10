import { Component, OnInit } from '@angular/core';
import { FormsModule, Form } from '@angular/forms';

import { ApiService } from '../../api.service';

@Component({
  selector: 'app-create-record-form',
  templateUrl: './create-record-form.component.html',
  styleUrls: ['./create-record-form.component.scss']
})
export class CreateRecordFormComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  async onSubmit(data) {
    console.log(data);
    return this.apiService.createRecord(data.NID, data.BType, data.PFile, data.hospital);
  }
}
