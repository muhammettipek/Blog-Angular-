import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostdetayComponent } from './postdetay.component';

describe('PostdetayComponent', () => {
  let component: PostdetayComponent;
  let fixture: ComponentFixture<PostdetayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostdetayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostdetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
