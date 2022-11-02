import { Component } from '@angular/core';
import { posts } from './posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'intro';
  nombre = 'Cristhian David Suarez';
  articulos = posts;
}
