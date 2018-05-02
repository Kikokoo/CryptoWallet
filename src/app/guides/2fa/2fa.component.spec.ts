import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { 2faComponent } from './2fa.component';

describe('2faComponent', () => {
  let component: 2faComponent;
  let fixture: ComponentFixture<2faComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 2faComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(2faComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
