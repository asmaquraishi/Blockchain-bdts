import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { CreateRecordFormComponent } from './create-record-form.component';
import { ApiService } from '../../api.service';

describe('CreateRecordFormComponent', () => {
  let component: CreateRecordFormComponent;
  let fixture: ComponentFixture<CreateRecordFormComponent>;
  let service: ApiService;
  let spy: any;
  let http: HttpClient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRecordFormComponent ],
      imports: [FormsModule],
      providers: [{provide: ApiService, UseValue: service}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = new ApiService(http);
    fixture = TestBed.createComponent(CreateRecordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
