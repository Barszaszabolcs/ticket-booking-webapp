import { Component } from '@angular/core';
import { FilmObject } from '../../shared/constants/constants';
import { Comment } from '../../shared/models/Comment';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent {
  filmObject: Array<any> = FilmObject;
  chosenImage: any;
  comments: Array<Comment> = [];

  commentsForm = this.createForm({
    username: '',
    comment: '',
    date: new Date()
  });

  constructor(private fb: FormBuilder) {
    this.chosenImage = this.filmObject[0];
  }

  reload() {}

  createForm(model: Comment) {
    let formGroup = this.fb.group(model);
    formGroup.get('username')?.addValidators([Validators.required]);
    formGroup.get('comment')?.addValidators([Validators.required, Validators.minLength(10)]);
    return formGroup;
  }

  addComment() {
    if (this.commentsForm.valid) {
      if (this.commentsForm.get('username') && this.commentsForm.get('comment')) {
        this.commentsForm.get('date')?.setValue(new Date());
        this.comments.push({...this.commentsForm.value as Comment});
      }
    }
  }
}
