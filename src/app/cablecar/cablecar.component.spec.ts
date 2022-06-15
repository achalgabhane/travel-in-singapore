import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CablecarComponent } from './cablecar.component';

describe('CablecarComponent', () => {
  let component: CablecarComponent;
  let fixture: ComponentFixture<CablecarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CablecarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CablecarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
