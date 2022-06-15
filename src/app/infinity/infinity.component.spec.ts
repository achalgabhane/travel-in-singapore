import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfinityComponent } from './infinity.component';

describe('InfinityComponent', () => {
  let component: InfinityComponent;
  let fixture: ComponentFixture<InfinityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfinityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfinityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
