import { Component,Input, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { coinInfoModel } from 'src/app/models/coin.info.model';
import { coinsModel } from 'src/app/models/coin.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent implements OnInit {
  @Input() coin;
  infoList: coinInfoModel = {img: null, usd: null, ils: null, eur: null, cache: 0};
  isCollapsed = true;


  constructor(public dataService:DataService) { 
    
   }
      
  ngOnInit(): void {

  }

 
  moreInfo(id): void{
   if(Date.now() - this.infoList.cache > 120 * 1000){
        this.dataService.getInfo(id).subscribe(info => {
          this.infoList = ({img: info.image.small,
           usd: info.market_data.current_price.usd,
            ils: info.market_data.current_price.ils,
             eur: info.market_data.current_price.eur,
              cache: Date.now()})});
      }
    }  
  }