import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolidaysComponent } from './holidays/holidays.component';
import { HolidayFormComponent } from './holiday-form/holiday-form.component';

const routes: Routes = [
  { path: 'holidays', component: HolidaysComponent },
  { path: 'holiday-form', component: HolidayFormComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }