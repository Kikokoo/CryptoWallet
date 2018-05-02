import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShouldYouMineComponent } from './should-you-mine.component';

describe('ShouldYouMineComponent', () => {
  let component: ShouldYouMineComponent;
  let fixture: ComponentFixture<ShouldYouMineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShouldYouMineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShouldYouMineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
