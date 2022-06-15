import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YotelComponent } from './yotel.component';

describe('YotelComponent', () => {
  let component: YotelComponent;
  let fixture: ComponentFixture<YotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
