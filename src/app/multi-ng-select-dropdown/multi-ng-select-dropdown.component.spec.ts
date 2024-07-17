import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiNgSelectDropdownComponent } from './multi-ng-select-dropdown.component';

describe('MultiNgSelectDropdownComponent', () => {
  let component: MultiNgSelectDropdownComponent;
  let fixture: ComponentFixture<MultiNgSelectDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiNgSelectDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiNgSelectDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
