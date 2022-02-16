import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  readData:any;
  successmsg:any;

  ngOnInit(): void {
    this.getAllData();
  }

  // get delete id
  deleteID(id:any) {
    console.log(id, 'deleted==>');
    this.service.deleteData(id).subscribe((res)=> {
      console.log(res, 'deleteres==>');
      this.successmsg = res.message;
      this.getAllData();
    });
  }

  // get Data
  getAllData() {
    this.service.getAllData().subscribe((res) => {
      console.log(res, "res==>");
      this.readData = res.data;
    });
  }

}
