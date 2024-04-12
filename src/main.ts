import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <div>Test1234</div>
    <input [(ngModel)]="name" />
  `,
  imports: [
    ReactiveFormsModule
  ]
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
