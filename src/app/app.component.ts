import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { coinModel } from './models/coin.model';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crypto-app';
  coinList = [];
  
  constructor(private dataService:DataService) { }
   ngOnInit(): void {
   }
  search(symbol) {

    
    
    
   
  }
}
    
  
   
      
    
  


