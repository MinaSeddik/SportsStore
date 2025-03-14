import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFilterComponent } from './my-filter.component';

describe('MyFilterComponent', () => {
  let component: MyFilterComponent;
  let fixture: ComponentFixture<MyFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
