import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards.component';
import { VotesModule } from '../votes/votes.module';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [CardsComponent, CardComponent],
  imports: [
    CommonModule,
    VotesModule
  ],exports:[
    CardsComponent
  ]
})
export class CardsModule { }
