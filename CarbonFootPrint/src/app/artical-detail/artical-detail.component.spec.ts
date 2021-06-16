import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticalDetailComponent } from './artical-detail.component';

describe('ArticalDetailComponent', () => {
  let component: ArticalDetailComponent;
  let fixture: ComponentFixture<ArticalDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticalDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
