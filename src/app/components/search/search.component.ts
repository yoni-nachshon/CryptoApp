import { Component, OnInit } from '@angular/core';
import { coinsModel } from 'src/app/models/coin.model';
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

  search(symbol): void{
    this.res = this.dataService.coins.find(coin => coin.symbol == symbol);
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
