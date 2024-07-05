import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFilter2Component } from './my-filter2.component';

describe('MyFilter2Component', () => {
  let component: MyFilter2Component;
  let fixture: ComponentFixture<MyFilter2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFilter2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFilter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
