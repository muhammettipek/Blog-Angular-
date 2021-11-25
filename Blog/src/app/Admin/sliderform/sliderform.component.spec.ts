import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderformComponent } from './sliderform.component';

describe('SliderformComponent', () => {
  let component: SliderformComponent;
  let fixture: ComponentFixture<SliderformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
