import { Component } from '@angular/core';
import { FilmObject } from '../../shared/constants/constants';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent {
  filmObject: any = FilmObject;

  reload() {
    
  }
}
