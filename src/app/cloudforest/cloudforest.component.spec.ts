import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudforestComponent } from './cloudforest.component';

describe('CloudforestComponent', () => {
  let component: CloudforestComponent;
  let fixture: ComponentFixture<CloudforestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudforestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudforestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
