import { Component, OnInit } from '@angular/core';
import { coinsModel } from 'src/app/models/coins-model';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchInfo: coinsModel = {symbol: null, name: null, id: null};
  res;
  noRes = false;
  constructor(public dataService:DataService) { }

  ngOnInit(): void {
  }

  search(coinId): void{
    this.res = this.dataService.coinList.find(test => test.symbol == coinId);
    if(this.res){
      this.searchInfo.symbol = this.res.symbol,
      this.searchInfo.name = this.res.name,
      this.searchInfo.id = this.res.id,
      this.noRes = false
    }
    else{
      this.noRes = true
    }
  }
}
