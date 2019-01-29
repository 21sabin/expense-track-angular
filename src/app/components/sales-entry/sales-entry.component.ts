import { Component, OnInit } from "@angular/core";
import * as moment from 'moment'

@Component({
  selector: "app-sales-entry",
  templateUrl: "./sales-entry.component.html",
  styleUrls: ["./sales-entry.component.css"]
})
export class SalesEntryComponent implements OnInit {
  constructor() {}

  currentDate: any;

  ngOnInit() {
    this.currentDate =  moment(new Date()).format('MM/DD/YYYY').toString();
    console.log(this.currentDate,"currentdate")
  }
}
