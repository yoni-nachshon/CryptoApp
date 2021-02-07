import { Component,Input, OnInit } from '@angular/core';
import { coinModel } from 'src/app/models/coin.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent implements OnInit {
  @Input() coin;
  infoList: coinModel = {img: null, usd: null, ils: null, eur: null, cache: 0}
 
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    
  }
  moreInfo(id): void{
   if(Date.now() - this.infoList.cache > 120 * 1000){
        this.dataService.getInfo(id).subscribe(info => {
          this.infoList = ({img: info.image['small'],
           usd: info.market_data.current_price.usd,
            ils: info.market_data.current_price.ils,
             eur: info.market_data.current_price.eur,
              cache: Date.now()})});
      }
    }
  }




 
