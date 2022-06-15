import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerilionparkComponent } from './merilionpark.component';

describe('MerilionparkComponent', () => {
  let component: MerilionparkComponent;
  let fixture: ComponentFixture<MerilionparkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerilionparkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerilionparkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
