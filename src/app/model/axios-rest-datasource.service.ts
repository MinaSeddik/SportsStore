import {Injectable} from '@angular/core';
import {Product} from "./product.model";
import {Order} from "./order.model";
import {environment} from "../../environments/environment";
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class AxiosRestDatasourceService {

  baseUrl: string = environment.baseUrl;
  auth_token: string | null;

  constructor() {

  }

  getProducts(): Promise<Product[]> {
    return axios.get(this.baseUrl + "products");
  }

  saveOrder(order: Order): Promise<Order> {
    return axios.post(this.baseUrl + "orders", order);
  }

  authenticate(user: string, pass: string): Promise<boolean> {
    return axios.post<any>(this.baseUrl + "login", {
      name: user, password: pass
    }).then(response => {
      this.auth_token = response.data.success ? response.data.token : null;
      return response.data.success;
    });
  }

  saveProduct(product: Product): Promise<Product> {
    let config = {
      headers: {
        "Authorization": `Bearer<${this.auth_token}>`
      }
    }

    return axios.post(this.baseUrl + "products", product, config);
  }

  updateProduct(product: Product): Promise<Product> {
    return axios.put(`${this.baseUrl}products/${product.id}`, product, this.getOptions());
  }

  deleteProduct(id: number): Promise<Product> {
    return axios.delete(`${this.baseUrl}products/${id}`, this.getOptions());
  }

  getOrders(): Promise<Order[]> {
    return axios.get(this.baseUrl + "orders", this.getOptions());
  }

  deleteOrder(id: number): Promise<Order> {
    return axios.delete(`${this.baseUrl}orders/${id}`, this.getOptions());
  }

  updateOrder(order: Order): Promise<Order> {
    return axios.put(`${this.baseUrl}orders/${order.id}`, this.getOptions());
  }

  private getOptions() {

    let config = {
      headers: {
        "Authorization": `Bearer<${this.auth_token}>`
      }
    }

    return config;
  }

  private sendRequest<T>(verb: string, url: string, body?: T): Promise<T> {

    let config = {
      method: verb,
      url: url,
      data: body,
      headers: {
        "Authorization": `Bearer<${this.auth_token}>`,
        "Access-Key": "<secret>",
        "Application-Name": "exampleApp"
      }
    };

    return axios.request(config);
  }


  private sendRequestWithErrorHandling<T>(verb: string, url: string, body?: T): Promise<T> {

    let config = {
      method: verb,
      url: url,
      data: body,
      headers: {
        "Authorization": `Bearer<${this.auth_token}>`
      }
    };

    return axios.request(config)
      .catch(error => {
        console.log(error);
        return error;
      });
    // .then(catchError((error: Response) =>
    //   throwError(`Network Error: ${error.statusText} (${error.status})`)));

  }


  getData(): Promise<Product[]> {

    console.log('inside getData ... start ')
    let result: Promise<Product[]> = this.getProducts();
    console.log('inside getData ... end ')

    return result;
  }

}
