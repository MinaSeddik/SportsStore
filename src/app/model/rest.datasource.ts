import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, delay, map, Observable, throwError} from "rxjs";
import {Product} from "./product.model";
import {Order} from "./order.model";

const PROTOCOL = "http";
const PORT = 3500;

// export const REST_URL = new InjectionToken("rest_url");

@Injectable({
  providedIn: 'root'
})
export class RestDatasource {
  baseUrl: string;
  auth_token: string | null;

  private readonly http: HttpClient = inject(HttpClient);

  // private readonly url: unknown = inject(REST_URL);

  constructor() {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + "products")
      // .pipe(delay(5000));
    // return this.sendRequestWithErrorHandling<Product[]>("GET", this.baseUrl);
  }

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl + "orders", order);
  }

  authenticate(user: string, pass: string): Observable<boolean> {
    return this.http.post<any>(this.baseUrl + "login", {
      name: user, password: pass
    }).pipe(map(response => {
      this.auth_token = response.success ? response.token : null;
      return response.success;
    }));
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl + "products", product, this.getOptions());
    // return this.sendRequestWithErrorHandling<Product>("POST", this.baseUrl, product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.baseUrl}products/${product.id}`, product, this.getOptions());
    // return this.sendRequestWithErrorHandling<Product>("PUT", `${this.baseUrl}/${product.id}`, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.baseUrl}products/${id}`, this.getOptions());
    // return this.sendRequestWithErrorHandling<Product>("DELETE", `${this.baseUrl}/${id}`);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + "orders", this.getOptions());
  }

  deleteOrder(id: number): Observable<Order> {
    return this.http.delete<Order>(`${this.baseUrl}orders/${id}`, this.getOptions());
  }

  updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.baseUrl}orders/${order.id}`, this.getOptions());
  }

  private getOptions() {
    return {
      headers: new HttpHeaders({
        "Authorization": `Bearer<${this.auth_token}>`
      })
    }
  }

  private sendRequest<T>(verb: string, url: string, body?: Product): Observable<T> {
    return this.http.request<T>(verb, url, {
      body: body,
      headers: new HttpHeaders({
        "Access-Key": "<secret>",
        "Application-Name": "exampleApp"
      })
    });
  }


  private sendRequestWithErrorHandling<T>(verb: string, url: string, body?: Product): Observable<T> {

    let myHeaders = new HttpHeaders();
    myHeaders = myHeaders.set("Access-Key", "<secret>");
    myHeaders = myHeaders.set("Application-Names", ["exampleApp", "proAngular"]);

    return this.http.request<T>(verb, url, {
      body: body,
      headers: myHeaders
    })
      // .pipe(delay(5000))
      .pipe(catchError((error: Response) =>
        throwError(`Network Error: ${error.statusText} (${error.status})`)));

  }


  getData() :Observable<Product[]> {

    console.log('inside getData ... start ')
    let result: Observable<Product[]> = this.getProducts();
    console.log('inside getData ... end ')

    return result;
  }
}
