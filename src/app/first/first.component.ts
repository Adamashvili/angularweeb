import { Component } from '@angular/core';
import { SecondComponent } from '../second/second.component';
import { TestsComponent } from "../tests/tests.component";
import { ApiService } from '../api.service';

@Component({
  selector: 'app-first',
  imports: [SecondComponent, TestsComponent],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  constructor(private api: ApiService) {
    this.getAll()
  }

  public allFoods:any[] = []

  getAll() {
    this.api.getAllProducts().subscribe( {
      next: (data:any) => this.allFoods = data,
      error: () => {}
    } )
  }

}
