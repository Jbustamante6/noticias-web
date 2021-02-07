import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Data } from '../../../interfaces/data.interface';
import { Votes } from '../../../interfaces/votes.interface';
import { LocalDataService } from '../../../services/localData/local-data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() item: Data;
  myVotes: Votes[];
  registerVote: boolean = true;
  constructor(public localService: LocalDataService) {}

  ngOnInit(): void {
    this.myVotes = this.localService.getMyVotes();
  }

  votesClick(uuid: string, isLike: boolean) {
    if (!uuid || isLike === null) {
      return;
    }

    /* console.log(this.myVotes.some((vote) => vote.uuid === uuid)); */

    if (this.myVotes.some((vote) => vote.uuid === uuid) === true) {
      this.myVotes
        .filter((vote: Votes) => vote.uuid === uuid)
        .map((vote: Votes) => {
          if (isLike) {
            vote.like += 1;
          } else {
            vote.dontlike += 1;
          }
        });
    }else{
      
      let newVote: Votes = {
        uuid: uuid,
        like: isLike ? 1:0,
        dontlike: isLike ? 0:1
      }
      this.myVotes.push(newVote);
    }
    
    if(isLike){
      this.item.like += 1;
    }else{
      this.item.dontlike += 1;
    }
    this.localService.setMyVotes(this.myVotes);
    this.registerVote = false;
  }
}
