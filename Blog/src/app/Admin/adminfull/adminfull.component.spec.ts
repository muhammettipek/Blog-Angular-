import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfullComponent } from './adminfull.component';

describe('AdminfullComponent', () => {
  let component: AdminfullComponent;
  let fixture: ComponentFixture<AdminfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminfullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
