import { Injectable } from '@angular/core';
import { Votes } from '../../interfaces/votes.interface';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {
  private myVotes: Votes[] = []
  constructor() { 

  }

  getMyVotes(){
    if(localStorage.getItem('myVotes')){
      this.myVotes = JSON.parse(localStorage.getItem('myVotes'));
    }
    return this.myVotes;
  }

  setMyVotes(votes: Votes[]){
    this.myVotes = votes;
    localStorage.setItem('myVotes', JSON.stringify(votes));
  }

}
