import { Component, OnInit } from '@angular/core';
import { HolidayService } from '../holiday.service';
import { Holiday } from '../Interface';


@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements OnInit {

  holidays: Holiday[] = [];

  constructor(private HolidayService : HolidayService) {}

  
  getHoliday(): void {
    this.HolidayService.getHoliday()
        .subscribe(holidays => this.holidays = this.holidays);
  }

  ngOnInit(): void {
    this.getHoliday();
  } 
  
}
