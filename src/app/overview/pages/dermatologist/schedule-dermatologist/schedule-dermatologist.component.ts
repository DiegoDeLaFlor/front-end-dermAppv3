import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-dermatologist',
  templateUrl: './schedule-dermatologist.component.html',
  styleUrls: ['./schedule-dermatologist.component.css']
})
export class ScheduleDermatologistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  get selected(): Date | null {
    return this._selected;
  }

  set selected(value: Date | null) {
    this._selected = value;
  }
  // @ts-ignore
  private _selected: Date | null;

  horarios=[
    {
      'range':'08:00am - 08:30am',
      'patient':'patient 1'
    },
    {
      'range':'08:30am - 09:00am',
      'patient':'patient 2'
    },
    {
      'range':'09:00am - 09:30am',
      'patient':'patient 3'
    },
    {
      'range':'09:30am - 10:00am',
      'patient':'patient 4'
    },
    {
      'range':'10:00am - 10:30am',
      'patient':'patient 5'
    },
    {
      'range':'10:30am - 11:00am',
      'patient':'patient 6'
    },
    {
      'range':'11:00am - 11:30am',
      'patient':'patient 7'
    },
    {
      'range':'11:30am - 12:00pm',
      'patient':'patient 8'
    },
    {
      'range':'02:00pm - 02:30pm',
      'patient':'patient 9'
    },
    {
      'range':'02:30pm - 03:00pm',
      'patient':'patient 10'
    }
  ]
}
