import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSpinnerComponent } from './view-spinner.component';

describe('ViewSpinnerComponent', () => {
  let component: ViewSpinnerComponent;
  let fixture: ComponentFixture<ViewSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSpinnerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
