import { ComponentFixture, TestBed } from '@angular/core/testing';

import {SliderTable} from './table.component';

describe('TableComponent', () => {
  let component: SliderTable;
  let fixture: ComponentFixture<SliderTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderTable ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
