import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

datalist : any =[];



  constructor(private service : ServiceService){}
  ngOnInit(): void {

    this.service.getdata().subscribe((data : any)=>{
     this.datalist = data.top_cards;
      
      console.log(this.datalist)
    })
  }



}
