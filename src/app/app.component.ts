import { Component } from '@angular/core';
import {CounterComponent} from "./counter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CounterComponent
  ],
  template: `
    <app-counter/>
  `,
  styles: [],
})
export class AppComponent {
  title = 'edu-angular-counter';
}
