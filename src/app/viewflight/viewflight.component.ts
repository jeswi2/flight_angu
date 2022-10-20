import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewflight',
  templateUrl: './viewflight.component.html',
  styleUrls: ['./viewflight.component.css']
})
export class ViewflightComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }

  fetchData=()=>{
    this.myapi.flightList().subscribe(
      (data)=>{
        this.viewData=data
      }
    )
  }

  deleteflight=(id:any)=>{
let data={
  "id":id
}
this.myapi.deleteflight(data).subscribe(
  (response)=>{
    alert("Deleted")
  }
)
this.fetchData()
  }




  viewData:any=[]

  ngOnInit(): void {
  }

}
