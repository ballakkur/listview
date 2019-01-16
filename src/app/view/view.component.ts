import { Component, OnInit } from '@angular/core';
import { DatafetchService } from 'src/app/datafetch.service';
// import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

data:[]
  constructor(public fetchData:DatafetchService) { }

  ngOnInit() {
    this.fetchData.getData()
    .subscribe((data)=>{
      // console.log(data);
      this.data = data;
      console.log(this.data);
    })
  }

}
