import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {WhoStartComponent} from "../who-start/who-start.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(WhoStartComponent, {
      width: '620px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
