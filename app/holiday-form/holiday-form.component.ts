import { Component, OnInit } from '@angular/core';
import { categoryHoliday, Holiday, status } from '../Interface';
import { HolidayService } from '../holiday.service';


@Component({
  selector: 'app-holiday-form',
  templateUrl: './holiday-form.component.html',
  styleUrls: ['./holiday-form.component.css']
})

export class HolidayFormComponent implements OnInit {


  statusType: status[] = ["Pending", "Approuved", "Cancel", "refused"];
  requestType: categoryHoliday[] = ["Yearly leave", "Study leave", "Maternity leave"];
  Holidays: Holiday[] = [];

  constructor(private HolidayService: HolidayService) { };

  ngOnInit(): void {
  };

  add(employee: string, start: Date, end: Date, status: status, category: categoryHoliday): void {

    this.HolidayService.addHoliday({ employee, start, end, status, category } as Holiday)
      .subscribe(holiday => {
        this.Holidays.push(holiday);
      });
  }

}

