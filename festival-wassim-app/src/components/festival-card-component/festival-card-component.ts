import { Component, input, output} from '@angular/core';

@Component({
  selector: 'app-festival-card-component',
  imports: [],
  templateUrl: './festival-card-component.html',
  styleUrl: './festival-card-component.css'
})
export class FestivalCardComponent {
  public name = input<string>();
  public location = input<string>();
  public year = input<number>();

  public remove = output<number>();
}
