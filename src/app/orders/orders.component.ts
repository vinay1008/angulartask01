import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
orderlist : any =[];
constructor(private service : ServiceService){}
  ngOnInit(): void {
    this.service.getdata().subscribe((ele : any) =>{
      this.orderlist = ele.recent_orders;
      console.log(this.orderlist);
    })
  }
}
