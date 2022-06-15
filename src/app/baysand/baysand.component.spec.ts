import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaysandComponent } from './baysand.component';

describe('BaysandComponent', () => {
  let component: BaysandComponent;
  let fixture: ComponentFixture<BaysandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaysandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaysandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
