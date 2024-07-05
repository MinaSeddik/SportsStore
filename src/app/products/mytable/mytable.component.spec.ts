import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MyTableComponent} from './mytable.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideHttpClient} from "@angular/common/http";
import {provideRouter} from "@angular/router";
import {Product} from "../../model/product.model";
import {Model} from "../../repository.model";
import {of} from "rxjs";
import {provideAnimations} from "@angular/platform-browser/animations";
import {DebugElement, signal} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('MytableComponent', () => {
  let component: MyTableComponent;
  let fixture: ComponentFixture<MyTableComponent>;

  let mockModel = {
    getProducts: function () {
      return [
        new Product(1, "test1", "Soccer", "", 100),
        new Product(2, "test2", "Chess", "", 100),
        new Product(3, "test3", "Soccer", "", 100),
      ]
    },

    getData: function () {
      // return Observable<Product[]>
      return of(this.getProducts());
    }
  };

  let debugElement: DebugElement;
  let bindingElement: HTMLSpanElement;
  let bindingElements: DebugElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTableComponent],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
        {provide: Model, useValue: mockModel},
        provideAnimations(),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    /* DebugElement object that represents the root element from the component’s template */
    debugElement = fixture.debugElement;
    // bindingElement = debugElement.query(By.css("span")).nativeElement;
    bindingElements = debugElement.queryAll(By.css("table tr td"));

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("filters categories", () => {
    // component.category = "Chess"
    component.category = signal<string>("Chess");
    expect(component.getProducts().length).toBe(1);
    // component.category = "Soccer";
    component.category = signal<string>("Soccer");
    expect(component.getProducts().length).toBe(2);
    // component.category = "Running";
    component.category = signal<string>("Running");
    expect(component.getProducts().length).toBe(0);
  });

  it("filters categories", () => {
    component.category = signal<string>("Chess");
    /* This method tells the Angular testing environment to process any changes and evaluate the data
        binding expressions in the template.  */
    fixture.detectChanges();
    expect(component.getProducts().length).toBe(1);
    expect(bindingElements[0].nativeElement.textContent).toContain("1");

    component.category = signal<string>("Soccer");
    fixture.detectChanges();
    expect(component.getProducts().length).toBe(2);
    expect(bindingElements[1].nativeElement.textContent).toContain("test1");

    component.category = signal<string>("Running");
    fixture.detectChanges();
    expect(component.getProducts().length).toBe(0);
    expect(bindingElements[2].nativeElement.textContent).toContain("Soccer");
  });

});
