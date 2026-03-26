import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navi } from './components/navi/navi';
import { Databinding } from './components/databinding/databinding';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navi, Databinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Website');
}
