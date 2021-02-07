import { Component, Input, OnInit } from '@angular/core';
import { Data } from '../../interfaces/data.interface';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() data:Data[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  

}
