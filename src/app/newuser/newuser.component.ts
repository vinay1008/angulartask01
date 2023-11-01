import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss']
})
export class NewuserComponent implements OnInit{

  userlist : any = [];
  constructor(private service : ServiceService){}
  ngOnInit(): void {

    this.service.getdata().subscribe((data : any)=>{
      this.userlist = data.new_users;
      console.log(this.userlist)
    })


  }

}
