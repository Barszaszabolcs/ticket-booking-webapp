import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmRoutingModule } from './film-routing.module';
import { FilmComponent } from './film.component';
import { FormsModule } from '@angular/forms';
import { DateFormatPipe } from '../../shared/pipes/date-format.pipe';


@NgModule({
  declarations: [
    FilmComponent,
    DateFormatPipe
  ],
  imports: [
    CommonModule,
    FilmRoutingModule,
    FormsModule
  ]
})
export class FilmModule { }
