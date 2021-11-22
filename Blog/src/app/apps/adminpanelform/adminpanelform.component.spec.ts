import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpanelformComponent } from './adminpanelform.component';

describe('AdminpanelformComponent', () => {
  let component: AdminpanelformComponent;
  let fixture: ComponentFixture<AdminpanelformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminpanelformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminpanelformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
