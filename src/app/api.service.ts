import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

    public loader: BehaviorSubject<boolean> = new BehaviorSubject(false)

    startLoading() {
      console.log("loaderi chairto");
      
      this.loader.next(true)
    }

    stopLoading() {
      console.log("gaitisha");
      
      this.loader.next(false)
    }

  getAllProducts() {
    return this.http.get("https://restaurant.stepprojects.ge/api/Products/GetAll")
  }
}
