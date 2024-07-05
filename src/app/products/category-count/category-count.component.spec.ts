import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCountComponent } from './category-count.component';

describe('CategoryCountComponent', () => {
  let component: CategoryCountComponent;
  let fixture: ComponentFixture<CategoryCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryCountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
