import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { VotesModule } from '../votes/votes.module';



@NgModule({
  declarations: [CardsComponent],
  imports: [
    CommonModule,
    VotesModule
  ],exports:[
    CardsComponent
  ]
})
export class CardsModule { }
