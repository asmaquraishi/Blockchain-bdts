import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QueryAllRecordsComponent } from './query-all-records/query-all-records.component';
import { ApiService } from './api.service';
import { CreateRecordFormComponent } from './submit-component/create-record-form/create-record-form.component';
import { SubmitComponent } from './submit-component/submit.component';


@NgModule({
  declarations: [
    AppComponent,
    QueryAllRecordsComponent,
    CreateRecordFormComponent,
    SubmitComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
