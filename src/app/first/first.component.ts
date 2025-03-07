import { Component } from '@angular/core';
import { SecondComponent } from '../second/second.component';
import { TestsComponent } from "../tests/tests.component";

@Component({
  selector: 'app-first',
  imports: [SecondComponent, TestsComponent],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {

}
