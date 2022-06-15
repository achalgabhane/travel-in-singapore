import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanpacificComponent } from './panpacific.component';

describe('PanpacificComponent', () => {
  let component: PanpacificComponent;
  let fixture: ComponentFixture<PanpacificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanpacificComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanpacificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
