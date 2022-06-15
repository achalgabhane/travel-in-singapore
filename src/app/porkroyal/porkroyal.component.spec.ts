import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorkroyalComponent } from './porkroyal.component';

describe('PorkroyalComponent', () => {
  let component: PorkroyalComponent;
  let fixture: ComponentFixture<PorkroyalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorkroyalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorkroyalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
