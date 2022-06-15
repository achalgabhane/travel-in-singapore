import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FultronComponent } from './fultron.component';

describe('FultronComponent', () => {
  let component: FultronComponent;
  let fixture: ComponentFixture<FultronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FultronComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FultronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
