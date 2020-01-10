import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryAllRecordsComponent } from './query-all-records.component';
import { ApiService } from '../api.service';
import { of, BehaviorSubject } from 'rxjs';

describe('QueryAllRecordsComponent', () => {
  let component: QueryAllRecordsComponent;
  let fixture: ComponentFixture<QueryAllRecordsComponent>;
  const subjectMock = new BehaviorSubject<Array<object>>([{
    Key: 'FAKERECORD', Record: {NID: 'testNID', BType: 'testBType', PFile: 'testPFile', hospital: 'testHospital'}}]);

  beforeEach(async(() => {
    const apiServiceStub = {
      records$: subjectMock.asObservable(),
      queryAllRecords() {
        const records = [{Key: 'FAKERECORD', Record: {NID: 'testNID', BType: 'testBType', PFile: 'testPFile', hospital: 'testHospital'}}];
        return of(records);
      }
    };

    TestBed.configureTestingModule({
      declarations: [ QueryAllRecordsComponent ],
      providers: [ {provide: ApiService, useValue: apiServiceStub} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryAllRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a table', () => {
    const queryAllRecordsElement: HTMLElement = fixture.nativeElement;
    const table = queryAllRecordsElement.querySelector('table');
    expect(table);
  });
});
