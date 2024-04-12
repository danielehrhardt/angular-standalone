import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    <ul>
      <li *ngFor="let item of list">{{ item }}</li>
    </ul>

  `,
  imports: [
    FormsModule,
    NgFor
  ]
})
export class App {
  name = 'Angular';
  list = ['a', 'b', 'c'];
}

bootstrapApplication(App);
