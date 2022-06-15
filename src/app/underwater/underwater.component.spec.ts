import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderwaterComponent } from './underwater.component';

describe('UnderwaterComponent', () => {
  let component: UnderwaterComponent;
  let fixture: ComponentFixture<UnderwaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderwaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnderwaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
