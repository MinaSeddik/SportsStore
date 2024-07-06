import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxBootstrapComponent } from './ngx-bootstrap.component';

describe('NgxBootstrapComponent', () => {
  let component: NgxBootstrapComponent;
  let fixture: ComponentFixture<NgxBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxBootstrapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
