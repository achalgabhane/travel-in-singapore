import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DolphinsComponent } from './dolphins.component';

describe('DolphinsComponent', () => {
  let component: DolphinsComponent;
  let fixture: ComponentFixture<DolphinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DolphinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DolphinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
