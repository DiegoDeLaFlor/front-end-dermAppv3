import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-who-start',
  templateUrl: './who-start.component.html',
  styleUrls: ['./who-start.component.css']
})
export class WhoStartComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<HomeComponent>) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
