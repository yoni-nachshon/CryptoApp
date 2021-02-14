import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  coinList = [];
 

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    for(let i = 0; i<50; i++){
      this.dataService.get().subscribe(info => {
        this.coinList.push({symbol: info[i].symbol,
           name: info[i].name, id: info[i].id})})
    }
    
  }
}
  
