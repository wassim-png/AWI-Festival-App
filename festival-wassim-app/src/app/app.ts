import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FestivalCardComponent } from "../components/festival-card-component/festival-card-component";
import { FestivalListComponent } from "../components/festival-list-component/festival-list-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FestivalCardComponent, FestivalListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('festival-wassim-app');
}
