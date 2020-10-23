/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InhalteComponent } from './inhalte.component';

describe('InhalteComponent', () => {
  let component: InhalteComponent;
  let fixture: ComponentFixture<InhalteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InhalteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InhalteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
