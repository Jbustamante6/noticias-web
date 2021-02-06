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

}
