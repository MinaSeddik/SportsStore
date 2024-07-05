import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDeProduitsComponent } from './form-de-produits.component';
import {DebugElement} from "@angular/core";
import {Product} from "../../model/product.model";

describe('FormDeProduitsComponent', () => {
  let component: FormDeProduitsComponent;
  let fixture: ComponentFixture<FormDeProduitsComponent>;

  let debugElement: DebugElement;
  let divElement: HTMLDivElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDeProduitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDeProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    divElement = debugElement.children[0].nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("handles mouse events", () => {
    expect(component.formSubmitted).toBeFalsy();
    expect(divElement.classList.contains("bg-success")).toBeFalsy();
    debugElement.triggerEventHandler("mouseenter", new Event("mouseenter"));
    fixture.detectChanges();
    expect(component.formSubmitted).toBeTruthy();
    expect(divElement.classList.contains("bg-success")).toBeTruthy();
    debugElement.triggerEventHandler("mouseleave", new Event("mouseleave"));
    fixture.detectChanges();
    expect(component.formSubmitted).toBeFalsy();
    expect(divElement.classList.contains("bg-success")).toBeFalsy();
  });


  it("implements output property", () => {
    let product: Product;
    component.newProductEvent.subscribe(value => product = value);
    debugElement.triggerEventHandler("mouseenter", new Event("mouseenter"));
    expect(product).toBeTruthy();
    debugElement.triggerEventHandler("mouseleave", new Event("mouseleave"));
    expect(product).toBeFalsy();
  });


});
