import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchflight',
  templateUrl: './searchflight.component.html',
  styleUrls: ['./searchflight.component.css']
})
export class SearchflightComponent implements OnInit {

  constructor(private myapi:ApiService) { }

capacity=""
destination=""
flightname=""
origin=""

  readValues=()=>{
    let data={
      "capacity":this.capacity,
      "destination":this.destination,
      "flightname":this.flightname,
      "origin":this.origin

    }
    console.log(data)
    this.myapi.searchflight(data).subscribe(
      (response)=>{
        this.data=response
      }
    )
  }


  data:any=[]

  ngOnInit(): void {
  }

}
