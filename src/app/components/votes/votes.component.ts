import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
  @Input() like: number;
  @Input() dontlike: number;
  constructor() { }

  ngOnInit(): void {
  }

  percent(value: number): number{
    const total = (this.dontlike + this.like);
    const val = value * 100 / total;
    return Math.round(val);
  }

}
