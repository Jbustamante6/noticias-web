import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../services/getDataService/get-data.service';
import { Data } from '../../interfaces/data.interface';
import { LocalDataService } from '../../services/localData/local-data.service';
import { Votes } from '../../interfaces/votes.interface';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  myVotes: Votes[] = [];
  constructor(
    private getDataService: GetDataService,
    public localService: LocalDataService
  ) {
    this.myVotes = this.localService.getMyVotes();
  }
  data: Data[] = [];

  ngOnInit(): void {
    this.getDataService.getDataInformation().subscribe(
      (data) => {
        this.data = data;
        for (const item of this.data) {
          const localItem = this.myVotes.find(
            (local) => local.uuid === item.uuid
          );
          if (localItem) {
            item.like += localItem.like;
            item.dontlike += localItem.dontlike;
          }
        }
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
