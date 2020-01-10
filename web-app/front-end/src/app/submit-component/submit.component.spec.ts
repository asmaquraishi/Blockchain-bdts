import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

import { SubmitComponent } from './submit.component';

describe('SubmitComponent', () => {
  let component: SubmitComponent;
  let fixture: ComponentFixture<SubmitComponent>;

  @Component({selector: 'app-create-record', template: ''})
  class CreateRecordStubComponent {}



  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [
        SubmitComponent,
        CreateRecordStubComponent,
   
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set showCreateRecord to true', () => {
    expect(component.showCreateRecord).toEqual(true);
  });

  it('should have a createRecord component', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-create-record')).toBeTruthy();
  });
  

});
