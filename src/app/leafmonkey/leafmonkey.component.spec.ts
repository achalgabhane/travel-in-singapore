import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafmonkeyComponent } from './leafmonkey.component';

describe('LeafmonkeyComponent', () => {
  let component: LeafmonkeyComponent;
  let fixture: ComponentFixture<LeafmonkeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeafmonkeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafmonkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
