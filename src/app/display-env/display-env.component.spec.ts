import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEnvComponent } from './display-env.component';

describe('DisplayEnvComponent', () => {
  let component: DisplayEnvComponent;
  let fixture: ComponentFixture<DisplayEnvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayEnvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
