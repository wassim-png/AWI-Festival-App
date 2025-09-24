import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FestivalCardComponent } from "../components/festival-card-component/festival-card-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FestivalCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('festival-wassim-app');
}
