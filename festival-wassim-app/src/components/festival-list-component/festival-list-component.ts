import { Component } from '@angular/core';
import { FestivalCardComponent } from '../festival-card-component/festival-card-component';
import { FestivalDto } from '../../types/festival-dto';

@Component({
  selector: 'app-festival-list-component',
  imports: [FestivalCardComponent],
  templateUrl: './festival-list-component.html',
  styleUrl: './festival-list-component.css'
})
export class FestivalListComponent {
  public festival1: FestivalDto = { name: "Ardentes", location: "Liège, Belgique", year: 2025, hidden: false}
  public festival2: FestivalDto = { name: "Rolling Loud", location: "Californie, Etats-Unis", year: 2027, hidden: false}
  public festival3: FestivalDto = { name: "Holocène", location: "Grenoble, France", year: 2026, hidden: false}
  public festivals: FestivalDto[] = [this.festival1, this.festival2, this.festival3]

  public onDelete(year: number): void {
    const festival = this.festivals.find(f => f.year === year);
    if (festival) {
      festival.hidden = true;
    }
  }
}

