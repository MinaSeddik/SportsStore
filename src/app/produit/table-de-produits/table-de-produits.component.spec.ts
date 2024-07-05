import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDeProduitsComponent } from './table-de-produits.component';

describe('TableDeProduitsComponent', () => {
  let component: TableDeProduitsComponent;
  let fixture: ComponentFixture<TableDeProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableDeProduitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDeProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
