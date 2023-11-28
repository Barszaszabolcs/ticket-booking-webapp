import { Component } from '@angular/core';
import { FilmObject } from '../../shared/constants/constants';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent {
  filmObject: Array<any> = FilmObject;
  chosenImage: any;
  commentObject: any = {};
  comments: Array<any> = [];

  constructor() {
    this.chosenImage = this.filmObject[0];
  }

  reload() {}

  addComment() {
    if (this.commentObject.username && this.commentObject.comment) {
      this.commentObject['date'] = new Date();
      this.comments.push({...this.commentObject});
    }
  }
}
