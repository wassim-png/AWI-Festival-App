import { Component } from '@angular/core';
import { FestivalCardComponent } from '../festival-card-component/festival-card-component';

@Component({
  selector: 'app-festival-list-component',
  imports: [FestivalCardComponent],
  templateUrl: './festival-list-component.html',
  styleUrl: './festival-list-component.css'
})
export class FestivalListComponent {
  public name1: string = 'Holocène';
  public location1: string = 'Grenoble, France';
  public year1: number = 2025;
  public hide1: boolean = false;

  public name2: string = 'Ardentes';
  public location2: string = 'Lièges, Belgique';
  public year2: number = 2026;
  public hide2: boolean = false;

  public name3: string = 'Rolling Loud';
  public location3: string = 'Californie, Etas-Unis';
  public year3: number = 2027;
  public hide3: boolean = false;

  public onDelete(year: number) {
    if (year == this.year1) {
      this.hide1 = true;
    }
    if (year == this.year2) {
      this.hide2 = true;
    }
    if (year == this.year3) {
      this.hide3 = true;
    }
  }
}
