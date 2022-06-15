import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeaturtleComponent } from './seaturtle.component';

describe('SeaturtleComponent', () => {
  let component: SeaturtleComponent;
  let fixture: ComponentFixture<SeaturtleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeaturtleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeaturtleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
