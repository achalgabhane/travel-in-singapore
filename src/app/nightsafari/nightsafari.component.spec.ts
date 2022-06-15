import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NightsafariComponent } from './nightsafari.component';

describe('NightsafariComponent', () => {
  let component: NightsafariComponent;
  let fixture: ComponentFixture<NightsafariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NightsafariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NightsafariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
